import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header'

const ProtectedRoutes = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  )
}

export default ProtectedRoutes