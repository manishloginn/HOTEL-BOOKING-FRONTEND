
import './styles/index.scss'
import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage'
import {  useState } from "react"

const AuthWrraper = () => {
  // const dispatch=useDispatch()
  const [show, setShow] = useState(false)

  

  return (<div className="auth-page show">
    {
      show  ?  <RegisterPage setShow={setShow} />: <LoginPage setShow={setShow} /> 
    }
  </div>)
}

export default AuthWrraper