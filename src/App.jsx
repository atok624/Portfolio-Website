import { Analytics } from '@vercel/analytics/react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <section>
      <Outlet />
      <Analytics />
    </section>
  );
}

export default App;
