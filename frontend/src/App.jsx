
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from './pages/Home'; 
import Register from './features/register/register.jsx';

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
  ]);

  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
