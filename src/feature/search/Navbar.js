import React from 'react'
// import { Link } from 'react-router-dom'
import "./style/navbar.scss"
import NavLinks from './NavLinks'

const Navbar = () => {

  return (
    <div className='container'>
      <NavLinks />
    </div>
  )
}

export default Navbar
