import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import ErrorBoundary from './pages/errorBoundary';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/ErrorBoundary",
    element: <ErrorBoundary />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;