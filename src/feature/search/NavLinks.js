import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style/navbar.scss"
import './style/Profile.scss'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { toggleLogin } from './slice'
import AuthWrraper from '../auth'
import Cookies from 'js-cookie';
import { Button, notification, Popover, Space } from 'antd'
import { User } from 'lucide-react'
// import jwt_decode from 'jwt-decode'
import { jwtDecode } from 'jwt-decode';



export const LoginCalling = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AuthWrraper />
    </motion.div>
  )
}


const NavLinks = () => {
  const [token, setToken] = useState(null)
  const dispatch = useDispatch()
  const [userDetail, setuserDetail] = useState(null)
  const togglePopup = useSelector((state) => state.search.togglePopup)
  // const user = useSelector((state) => state.loginSlice)
  const userToken = Cookies.get("userToken")
  const navigate = useNavigate()
  // console.log(userToken)

  useEffect(() => {
    setToken(userToken)
    if (userToken) {
      const decodeuserDetail = jwtDecode(userToken)
      setuserDetail(decodeuserDetail)
    }
  }, [userToken])

  // console.log(userDetail)

  const showLoginPopup = () => {
    dispatch(toggleLogin())
  }

  const handelLogout = () => {
    Cookies.remove('userToken')
    setToken(null)
    notification.success({
      message:"Logout Successfull"
    })
  }

  const handelNavigate = (path) => {
    navigate(path)
  }

  const firstlettercapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <div className='navbar'>
        <Link to="/">
          <div className='logo'>
            <span className='stay'>Stay</span > <span > Well</span></div>
        </Link>
        {

          token ? <Space wrap>
            <div className='username'>
              <h3>Welcome {firstlettercapital(userDetail.user)} !</h3>
            </div>
            <Popover className='h' content={<div className='profile-wrraper'>

              <div className='profile-item'>
                <span onClick={() => handelNavigate('/profile')}>View Profile</span>
              </div>
              <div className='profile-item profile-item-border'>
                <span onClick={() => handelNavigate("/book")}>My Bookings</span>
              </div>
              <div className='profile-item profile-item-border'>
                <span onClick={handelLogout}>Log out</span>
              </div>
            </div>} trigger="hover">
              <Button><User /></Button>
            </Popover>
          </Space>
            : <div className='navbarlink'>
              <Link onClick={showLoginPopup} > Sign In </Link>
              <Link to='#' > Create An Account </Link>
            </div>
        }

      </div>



      {togglePopup && (
        <LoginCalling />
      )}
    </>
  )
}

export default NavLinks
