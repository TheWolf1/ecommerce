import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'

const PublicRoutes = () => {
  return (
    <div>
        <Header />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PublicRoutes