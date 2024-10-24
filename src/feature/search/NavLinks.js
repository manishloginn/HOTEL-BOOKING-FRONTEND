import React from 'react'
import { Link } from 'react-router-dom'

import "./style/navbar.scss"


import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { toggleLogin } from './slice'
import AuthWrraper from '../auth'

export const LoginCalling = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <LoginPage  /> */}
      <AuthWrraper />
    </motion.div>
  )
}


const NavLinks = () => {

  // const [togglePopup, settogglePopup] = useState(false)
  const dispatch=useDispatch()

  const togglePopup = useSelector((state) => state.search.togglePopup)

  
  const showLoginPopup = () => {
    dispatch(toggleLogin())
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
        <LoginCalling  />
      )}
    </>
  )
}

export default NavLinks
