
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from './pages/home.jsx'; 

import Register from './features/register/register.jsx';
import './App.css'
import Login from './pages/Login.jsx'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);

 
  return (

      <RouterProvider router={router} />
    
  );
}

export default App;
