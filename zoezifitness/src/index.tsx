import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './routes/Contact';
import About from './routes/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'contact/',
    element: <Contact />
  },

  {
    path: 'about/',
    element: <About />
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider  router={router} />
);

