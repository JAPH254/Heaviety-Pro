import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/home'
import Error from './pages/Error';
import ErrorBoundary from './pages/errorBoundary';
import Register from './pages/Register/register';
import Login from './pages/Login/Login';
import ActivateAccount from './pages/Login/ActivateAccount';
import PasswordReset from './pages/Passwords/PasswordReset';
import Dashboard from './pages/dashboard/dashboard';
import ResetPasswordConfirmation from './pages/Passwords/ResetPasswordConfirmation';
import './App.css';
import UserProfile from './pages/profile/UserProfile';
import WaitingPage from './pages/Register/waitingpage';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/activateaccout', element: <ActivateAccount /> },
  { path: '/forgot-password', element: <PasswordReset /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/profile', element: <UserProfile />},
  { path: '/errorBoundary', element: <ErrorBoundary /> },
  { path: '/activate/:uid/:token', element: <ActivateAccount /> },
  { path: 'password/reset/confirm/:uid/:token', element: <ResetPasswordConfirmation /> },
  {path: '/waiting', element: <WaitingPage />},
];

const router = createBrowserRouter(
  routes.map((route) => ({ ...route, errorElement: <Error /> }))
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;