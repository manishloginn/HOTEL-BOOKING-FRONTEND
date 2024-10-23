import './styles/LoginPage.scss'
const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-wrraper">
                <div className='login-heading'>
                    <h2>Welcome Back <span>👏</span></h2>
                    <span>let's explore the app again with us.</span>
                </div>
                <form>
                    <div className='login-input-wrraper'>
                        <label htmlFor="login-email">Email</label>
                        <input type="text" placeholder='Enter your email' required id='login-email' />
                    </div>
                    <div className='login-input-wrraper'>
                        <label htmlFor="login-Password">Password</label>
                        <input type="text" placeholder='Enter your password' required id='login-Password' />
                        <span>Forgot Password?</span>
                    </div>
                    <button className='login-button'>Login</button>
                </form>
            </div>
            <div className="register-wrraper">
                <p>Don't have an acount? <span>Register here</span></p>
            </div>
        </div>
    )
}

export default LoginPage
