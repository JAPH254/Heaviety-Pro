import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Error from './pages/Error';
import ErrorBoundary from './pages/errorBoundary';
import Register from './pages/register';
import Login from './pages/Login';
import ActivateAccount from './pages/ActivateAccount';
import PasswordReset from './pages/PasswordReset';
import Dashboard from './pages/dashboard';
import ResetPasswordConfirmation from './pages/ResetPasswordConfirmation';
import './App.css';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/activateaccout', element: <ActivateAccount /> },
  { path: '/forgot-password', element: <PasswordReset /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/errorBoundary', element: <ErrorBoundary /> },
  { path: '/activate/:uid/:token', element: <ActivateAccount /> },
  { path: 'password/reset/confirm/:uid/:token', element: <ResetPasswordConfirmation /> },
];

const router = createBrowserRouter(
  routes.map((route) => ({ ...route, errorElement: <Error /> }))
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;