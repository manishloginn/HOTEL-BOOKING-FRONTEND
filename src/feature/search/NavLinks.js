import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginPage from "../auth/LoginPage"

import "./style/navbar.scss"


import { motion } from "framer-motion"

export const LoginCallint = ({ settogglePopup }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LoginPage settogglePopup={settogglePopup} />
    </motion.div>
  )
}


const NavLinks = () => {

  const [togglePopup, settogglePopup] = useState(false)
  const showLoginPopup = () => {
    settogglePopup(prev => !prev)
  }



  return (
    <>
      <div className='navbar'>
        <Link to="/">
          <div className='logo'>
            <span className='stay'>Stay</span >   <span > Well</span></div>
        </Link>
        <div className='navbarlink'>
          <Link onClick={showLoginPopup} > Sign In </Link>
          <Link to='#' > Create An Account </Link>
        </div>

      </div>



      {togglePopup && (
        <LoginCallint settogglePopup={settogglePopup} />
      )}
    </>
  )
}

export default NavLinks
