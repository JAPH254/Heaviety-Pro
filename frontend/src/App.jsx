import Home from './pages/home';
import Register from './pages/register';
import ErrorBoundary from './pages/errorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  
import ActivateAccount from './pages/ActivateAccount.jsx';
import Login from './pages/Login.jsx';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/activateaccout',
      element: <ActivateAccount/>,
    }
      {
    path:"/ErrorBoundary",
    element: <ErrorBoundary />,
  }
  ]);

  console.log('App is rendering');
  return (
    <RouterProvider router={router} />
  );
}

export default App;
