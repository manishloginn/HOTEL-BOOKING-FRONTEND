import { useDispatch } from 'react-redux'
import './styles/LoginPage.scss'
import { toggleLogin } from '../search/slice'
const
    LoginPage = ({ settogglePopup }) => {

        const dispatch=useDispatch()


        return (
            <div className="login-page show">
                <div className="login-wrraper">
                    <span className='closethis' onClick={() => dispatch(toggleLogin())}>X</span>
                    <div className='login-heading'>
                        <h2>Welcome Back <span>👏</span></h2>
                        <span>Let's explore the app again with us.</span>
                    </div>
                    <form>
                        <div className='login-input-wrraper'>
                            <label htmlFor="login-email">Email</label>
                            <input type="text" placeholder='Enter your email' required id='login-email' />
                        </div>
                        <div className='login-input-wrraper'>
                            <label htmlFor="login-Password">Password</label>
                            <input type="text" placeholder='Enter your password' required id='login-Password' />
                        </div>
                        <span>Forgot Password?</span>
                        <button className='login-button'>Login</button>
                        <div className="register-wrraper">
                            <p>Don't have an account? <span>Register here</span></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

export default LoginPage
