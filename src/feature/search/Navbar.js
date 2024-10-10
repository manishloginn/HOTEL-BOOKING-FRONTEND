import React from 'react'
import { Link } from 'react-router-dom'
import "./style/navbar.scss"

const Navbar = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='logo'> <span className='stay'>Stay</span>  Well</div>
        <div className='navbarlink'>
            <Link to='#' > Create an Account </Link>
            <Link to='#' > Sign In </Link>
            <Link to='#' > Create An Account </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
