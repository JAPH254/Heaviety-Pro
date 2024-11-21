import Home from './pages/home';
import Register from './pages/register';
import ErrorBoundary from './pages/errorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  
import ActivateAccount from './pages/ActivateAccount.jsx';
import Login from './pages/Login.jsx';
import './App.css';
import Error from "./pages/Error.jsx"
import  PasswordReset from "./pages/PasswordReset.jsx"

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
