import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { Home } from './pages/Home';
import ThankYou from './pages/ThankYou';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import { initializeTheme } from './theme';

initializeTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/thanks',
        element: <ThankYou />,
      },
      {
        path: '/work/:slug',
        element: <ProjectCaseStudy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
