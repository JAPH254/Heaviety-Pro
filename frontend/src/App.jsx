import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ActivateAccount from '/src/Pages/ActivateAccount'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/activate" element={<ActivateAccount />} />
      </Routes>
    </Router>
  )
}

export default App
