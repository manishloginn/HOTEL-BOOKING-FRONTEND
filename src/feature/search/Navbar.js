import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import "./style/navbar.scss"
import NavLinks, { LoginCalling } from './NavLinks'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Dropdown, notification, Popover, Space } from 'antd'
import { HolderOutlined } from '@ant-design/icons'
import { toggleLogin } from './slice'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode'
import { User } from 'lucide-react'

const Navbar = () => {
  const togglePopup = useSelector((state) => state.search.togglePopup)

  const [token, setToken] = useState(null)
  const dispatch = useDispatch()
  const [userDetail, setuserDetail] = useState(null)
  const navigate = useNavigate()

  const userToken = Cookies.get("userToken")
  const items = [
    {
      key: '1',
      label: (
        <span onClick={() => dispatch(toggleLogin())}>
          Sign up
        </span>
      ),
      extra: '⌘'
    },
    {
      key: '2',
      label: 'Create an Account',
      extra: '⌘',
    },
  ];


  const handelNavigate = (path) => {
    navigate(path)
  }


  const handelLogout = () => {
    Cookies.remove('userToken')
    setToken(null)
    notification.success({
      message: "Logout Successfull"
    })
  }


  useEffect(() => {
    setToken(userToken)
    if (userToken) {
      const decodeuserDetail = jwtDecode(userToken)
      setuserDetail(decodeuserDetail)
    }
  })

  const firstlettercapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // console.log(token)
  return (

    <>

      <div className='uppercontainer'>
        <Link to="/">
          <div className='logo'>
            <span className='stay'>Stay</span > <span className='well' > Well</span>
          </div>
        </Link>
        <div>
          {
            token ? <Space wrap>
              < div className='username' >
                <h3 style={{fontSize:"12px"}}>Welcome {firstlettercapital(userDetail.user)} !</h3>
              </ div>
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
            </Space >
              :
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space >
                    <HolderOutlined style={{ fontSize: "50px", color: "grey" }} />
                  </Space>
                </a>
              </Dropdown>
          }
        </div>

        {togglePopup && (
          <LoginCalling />
        )}
      </div>



      <div className='container'>
        <NavLinks />
      </div>
    </>

  )
}

export default Navbar
