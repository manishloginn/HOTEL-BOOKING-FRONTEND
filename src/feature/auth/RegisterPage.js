import { useDispatch } from "react-redux"
import "./styles/RegisterPage.scss"
import { toggleLogin } from "../search/slice"
import Endpoints from "../../network/endpoints"
import request from "../../network/request"

const RegisterPage = ({setShow}) => {
    const dispatch = useDispatch()

    const handelSubmit = async(e)=>{
        e.preventDefault()
        const payload = {
            url: Endpoints.userRegister,
            method: 'POST',
            data: {
                username: e.target.username.value,
                email: e.target.email.value,
                role: e.target.role.value,
                password: e.target.password.value,
            }
        }
                try {
            const {success,data} = await request(payload)
            if(success){
                alert("user registerd success")
            }else{
              alert(data ? data : 'something went wrong')
            }
        } catch (error) {
           console.error(error)
        }
    }

    return (
        <div className="register-wrraper">
            <span className='closethis' onClick={() => dispatch(toggleLogin())}>X</span>
            <div className='register-heading'>
                <h2>Hey There <span>👏</span></h2>
                <span>Let's explore the app with us.</span>
            </div>
            <form onSubmit={handelSubmit}>
                <div className='register-input-wrraper'>
                    <label htmlFor="register-username">Username</label>
                    <input type="text" placeholder='Enter your username' name="username" required id='register-username' />
                </div>
                <div className='register-input-wrraper'>
                    <label htmlFor="register-email">Email</label>
                    <input type="email" placeholder='Enter your email' name="email" required id='register-email' />
                </div>
                <div className='register-input-wrraper'>
                    <label htmlFor="register-radio">Role</label>
                    <div className="register-radio-radio">
                        <label htmlFor="register-Customer">Customer</label>
                        <input type="radio" name="role" value={'Customer'} id="register-Customer" />
                        <label htmlFor="register-Admin">Admin</label>
                        <input type="radio" name="role" value={'Admin'} id="register-Admin" />
                    </div>
                </div>
                <div className='register-input-wrraper'>
                    <label htmlFor="register-Password">Password</label>
                    <input type="text" placeholder='Enter your password' name="password" required id='register-Password' />
                </div>
                <button className='register-button'>Login</button>
                <div className="login-wrraper-para">
                    <p>Already have an account? <span onClick={() => setShow(prev => !prev)}>Login here</span></p>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage