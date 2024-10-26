import { useDispatch } from 'react-redux'
import './styles/LoginPage.scss'
import { toggleLogin } from '../search/slice'
import { useState } from 'react'
import request from '../../network/request'
import Endpoints from '../../network/endpoints'
import Cookies from "js-cookie";
import { addDetail } from './slice'

const LoginPage = ({setShow}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const handelSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            method: 'post',
            url: Endpoints.userLogin,
            data: {
                email: e.target.email.value,
                password: e.target.password.value
            },
            withCredentials: true
        }

        try {
            setLoading(true)
            const result = await request(payload)
            const userDetail = result.data.findUser
            if (result.success) {
                setLoading(false)
                dispatch(toggleLogin(false))
                setLoading(false)
                Cookies.set("userToken", result.data.token)
                dispatch(addDetail(userDetail))
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-wrraper">
            <span className='closethis' onClick={() => dispatch(toggleLogin())}>X</span>
            <div className='login-heading'>
                <h2>Welcome Back <span>👏</span></h2>
                <span>Let's explore the app again with us.</span>
            </div>
            <form onSubmit={handelSubmit}>
                <div className='login-input-wrraper'>
                    <label htmlFor="login-email">Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required id='login-email' />
                </div>
                <div className='login-input-wrraper'>
                    <label htmlFor="login-Password">Password</label>
                    <input type="text" placeholder='Enter your password' name='password' required id='login-Password' />
                </div>
                <span>Forgot Password?</span>
                <button type='submit' disabled={loading} className='login-button'>{loading ? <div
                    className='login-loader'>
                </div> : 'Login'}</button>
                <div className="register-wrraper-para">
                    <p>Don't have an account? <span onClick={() => setShow(prev => !prev)}>Register here</span></p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
