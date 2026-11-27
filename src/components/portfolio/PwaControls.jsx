import React, { useEffect, useState } from 'react';
import { FiCheck, FiDownload, FiWifiOff } from 'react-icons/fi';
import { applyPwaUpdate, installPortfolio, usePwaState } from '../../pwa';

export const PwaInstall = () => {
  const { offline, offlineReady, registrationError, installPrompt, installing, installError, installed } = usePwaState();
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!import.meta.env.PROD && !offline) return null;
  if (!offline && !offlineReady && !registrationError && !installPrompt) return null;
  return (
    <div className="section pwa-footer">
      <p className="pwa-availability" role="status">{offline ? <><FiWifiOff aria-hidden="true" /> Viewing offline · messages need a connection</> : offlineReady ? <><FiCheck aria-hidden="true" /> Available for offline viewing</> : registrationError ? 'Offline access couldn’t be prepared. You can still browse online.' : null}</p>
      {installPrompt && !installed && <button className="pwa-install" type="button" onClick={installPortfolio} disabled={installing}><FiDownload aria-hidden="true" />{installing ? 'Opening installation…' : 'Install portfolio'}</button>}
      {isIos && !installed && !installPrompt && <details className="pwa-ios"><summary>Add to Home Screen</summary><p>Open this portfolio in Safari, tap Share, then choose Add to Home Screen.</p></details>}
      {installError && <p className="pwa-install-error" role="status">Installation couldn’t open. Try your browser’s install menu.</p>}
    </div>
  );
};
export const PwaUpdate = () => {
  const { waiting } = usePwaState();
  const [dismissed, setDismissed] = useState(false);
  const [updating, setUpdating] = useState(false);
  useEffect(() => { setDismissed(false); setUpdating(false); }, [waiting]);
  if (!waiting || dismissed) return null;
  return (
    <aside className="pwa-update" aria-labelledby="pwa-update-title">
      <div role="status"><strong id="pwa-update-title">A new version is ready.</strong><p>Send or copy any unfinished message before reloading.</p></div>
      <div className="pwa-update-actions"><button className="button button-primary" type="button" disabled={updating} onClick={() => { setUpdating(true); applyPwaUpdate(); }}>{updating ? 'Updating…' : 'Update & reload'}</button><button className="button button-secondary" type="button" disabled={updating} onClick={() => setDismissed(true)}>Later</button></div>
    </aside>
  );
};
