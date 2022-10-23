import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './pages/ProtectedRoutes';
import Home from './pages/Home'
import Header from './components/shared/Header'
import ProductById from './pages/ProductById';
import PublicRoutes from './pages/PublicRoutes';
import Login from './pages/Login';
import Purchase from './pages/Purchase';
function App() {
  

  return (
    <div className="App">
      
      <Routes>
        
        <Route element={<PublicRoutes/>}>
          <Route path='/' element={ <Home/> }/>
          <Route path='/producto/:id' element={ <ProductById/> }/>
        </Route>

        <Route element={<ProtectedRoutes/> } >
            <Route path='/purchase' element={<Purchase/>} />
        </Route>

        <Route path='/login' element={<Login/>} />
        
      </Routes>
      
    </div>
  )
}

export default App
