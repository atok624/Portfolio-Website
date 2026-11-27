import { useSyncExternalStore } from 'react';

let state = {
  offline: !navigator.onLine,
  offlineReady: false,
  registrationError: false,
  waiting: null,
  installPrompt: null,
  installing: false,
  installError: false,
  installed: window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true,
};
const subscribers = new Set();
let initialized = false;
let registration;
let reloadRequested = false;
let reloading = false;
let lastUpdateCheck = 0;

function update(patch) { state = { ...state, ...patch }; subscribers.forEach(listener => listener()); }
const subscribe = listener => { subscribers.add(listener); return () => subscribers.delete(listener); };
export const usePwaState = () => useSyncExternalStore(subscribe, () => state);

function noticeWaiting() {
  if (registration?.waiting && navigator.serviceWorker.controller) update({ waiting: registration.waiting });
}
async function checkForUpdate() {
  if (!registration || !navigator.onLine || Date.now() - lastUpdateCheck < 60000) return;
  lastUpdateCheck = Date.now();
  try { await registration.update(); } catch { /* Keep using the active offline version. */ }
}
async function registerWorker() {
  try {
    registration = await navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' });
    noticeWaiting();
    registration.addEventListener('updatefound', () => {
      const worker = registration.installing;
      worker?.addEventListener('statechange', () => { if (worker.state === 'installed') noticeWaiting(); });
    });
    if (registration.installing?.state === 'installed') noticeWaiting();
    await navigator.serviceWorker.ready;
    update({ offlineReady: true, registrationError: false });
  } catch { update({ registrationError: true }); }
}
export function initializePwa() {
  if (initialized) return;
  initialized = true;
  window.addEventListener('online', () => { update({ offline: false }); checkForUpdate(); });
  window.addEventListener('offline', () => update({ offline: true }));
  if (!import.meta.env.PROD) return;
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    if (!state.installed) update({ installPrompt: event, installError: false });
  });
  window.addEventListener('appinstalled', () => update({ installed: true, installPrompt: null, installing: false }));
  if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (reloadRequested && !reloading) { reloading = true; window.location.reload(); }
  });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) checkForUpdate(); });
  if (document.readyState === 'complete') registerWorker();
  else window.addEventListener('load', registerWorker, { once: true });
}
export async function installPortfolio() {
  const prompt = state.installPrompt;
  if (!prompt || state.installing) return;
  update({ installing: true, installError: false });
  try { await prompt.prompt(); await prompt.userChoice; update({ installPrompt: null }); }
  catch { update({ installPrompt: null, installError: true }); }
  finally { update({ installing: false }); }
}
export function applyPwaUpdate() {
  const worker = registration?.waiting || state.waiting;
  reloadRequested = true;
  if (worker?.state === 'installed') worker.postMessage({ type: 'SKIP_WAITING' });
  else window.location.reload();
}
