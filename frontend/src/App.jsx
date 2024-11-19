
import ActivateAccount from '/src/Pages/ActivateAccount'
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
      path: '/',
      element:<ActivateAccount/>,
    },
  ]);

  console.log('App is rendering');
  return (


     <Login/>
    

  )
      <RouterProvider router={router} />
    
  );
}

export default App;
