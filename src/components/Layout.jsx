import React from 'react'
import Navbar from './../pages/navbar'
import Footer from './../pages/footer'
const Layout = ({children}) => {
    return (
        <>
            <Navbar/> 
            {children}
            <Footer/>          
        </>
    )
}

export default Layout
