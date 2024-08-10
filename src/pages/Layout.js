import React from 'react'
import Footer from '../components/global/footer/Footer'
import Navbar from '../components/global/navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout