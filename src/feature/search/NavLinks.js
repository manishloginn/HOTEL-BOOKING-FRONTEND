import React from 'react'
import { Link } from 'react-router-dom'

import "./style/navbar.scss"

const NavLinks = () => {
  return (
    <div className='navbar'>
    <Link to="/">
      <div className='logo'>
        <span className='stay'>Stay</span >   <span > Well</span></div>
    </Link>
    <div className='navbarlink'>
      <Link to='#' > Create an Account </Link>
      <Link to='#' > Sign In </Link>
      <Link to='#' > Create An Account </Link>
    </div>
  </div>
  )
}

export default NavLinks
