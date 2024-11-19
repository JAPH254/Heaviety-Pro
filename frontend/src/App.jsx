import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from './pages/home.jsx'; 
import Register from './features/register/register.jsx';
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
      path: '/activate-account',
      element: <ActivateAccount />,
    },
  ]);

  console.log('App is rendering');
  return (
    <RouterProvider router={router} />
  );
}

export default App;
