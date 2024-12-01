import Home from './pages/LandingPage/home.jsx';
import Register from './pages/Register/register.jsx';
import ErrorBoundary from './pages/Error/errorBoundary.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  
import ActivateAccount from './pages/ActivateAccout/ActivateAccount.jsx';
import Login from './pages/Login/Login.jsx';
import './App.css';
import Error from "./pages/Error/Error.jsx"
import  PasswordReset from "./pages/ResetPassword/PasswordReset.jsx"
//  import UserProfile from "./pages/userProfile.jsx";
import Dashboard from './pages/Dashbaord/dashboard.jsx';

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
      // path:'/userprofile',
      // element:<UserProfile/>,
      // errorElement:<Error/>

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
  ]);

  console.log('App is rendering');
  return (
    <RouterProvider router={router} />
  );
}

export default App;
