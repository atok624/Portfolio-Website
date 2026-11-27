import { useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { PwaUpdate } from './components/portfolio/PwaControls';
import { usePwaState } from './pwa';

function App() {
  const { offline } = usePwaState();
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    if (previousPath.current === pathname) return undefined;
    previousPath.current = pathname;
    const frame = requestAnimationFrame(() => document.getElementById('main-content')?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  return (
    <>
      <Outlet />
      <ScrollRestoration />
      <PwaUpdate />
      {!offline && <Analytics />}
    </>
  );
}

export default App;
