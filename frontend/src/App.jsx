import Home from './pages/Homepage/home.jsx';
// import Register from './pages/register';
import ErrorBoundary from './pages/Error/errorBoundary.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  
import ActivateAccount from './pages/Register/ActivateAccount.jsx';
import Login from './pages/Login/Login.jsx';
import './App.css';
import Error from "./pages/Error/Error.jsx"
import  PasswordReset from "./pages/ResetpasswordFeature/PasswordReset.jsx"
import Dashboard from './pages/Dashboard/dashboard.jsx';
import Register from './pages/Register/register.jsx'
import ResetPasswordConfirmation from "./pages/ResetpasswordFeature/ResetPasswordConfirmation.jsx"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement:<Error/>
    },
    {
      path: '/register',
      element: <Register />,
      errorElement:<Error/>
    },
    {
      path: '/login',
      element: <Login />,
      errorElement:<Error/>
    },
    {
      path: '/activateaccout',
      element: <ActivateAccount/>,
      errorElement:<Error/>
    },
    {
      path:'/forgot-password',
      element:<PasswordReset/>,
      errorElement:<Error/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>,
      errorElement:<Error/>
    },
    {
    path:"/ErrorBoundary",
    element: <ErrorBoundary />,
    errorElement:<Error/>
  }
  ,{
    path:"/activate/:uid/:token",
    element: <ActivateAccount />,
    errorElement:<Error/>
  }
  ,{
    path:"/reset-password/:uid/:token",
    element: <ResetPasswordConfirmation />,
    errorElement:<Error/>
  }
  ]);

  console.log('App is rendering');
  return (
    <RouterProvider router={router} />
  );
}

export default App;
