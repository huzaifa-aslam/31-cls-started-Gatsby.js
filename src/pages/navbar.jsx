import React from 'react'
import {Link} from 'gatsby'
import style from './navbar.module.css'
const Navbar = () => {
    return (
        <div className={style.navbar}>
          <Link to="/">Home</Link><br/>  
          <Link to="/contact">Contact</Link>  
          <Link to="/product">Product</Link>  
        </div>
    )
}

export default Navbar
