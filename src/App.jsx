import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './pages/ProtectedRoutes';
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoutes/> } >
          <Route path='/' element={ <Home/> }/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
