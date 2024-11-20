import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from './pages/home.jsx'; 
import Register from './features/register/register.jsx';
import ActivateAccount from './pages/ActivateAccount.jsx'
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: '/activateaccout',
      element: <ActivateAccount/>,
      errorElement: <Error />,
    }
  ]);

  console.log('App is rendering');
  return (
    <RouterProvider router={router} />
  );
}

export default App;
