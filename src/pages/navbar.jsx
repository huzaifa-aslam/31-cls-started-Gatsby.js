import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <>
          <Link to="/">Home</Link><br/>  
          <Link to="/contact">Contact</Link>  
        </>
    )
}

export default Navbar
