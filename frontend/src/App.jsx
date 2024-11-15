import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './pages/navbar';
import Register from './pages/register';
import Footer from './pages/footer';

function App() {
  return (
    <BrowserRouter> 
      <Navbar />
      <Register />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
