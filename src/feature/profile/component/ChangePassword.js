import { Pen } from 'lucide-react'
import './../styles/ChangePassword.scss'
import { useState } from 'react'

const ChangePassword = ({ profileDetails }) => {


    const [show, setShow] = useState(false)

    const handelShow = (e) => {
        // e.preventDefault()
        setShow((prev) => !prev)
    }


    return (
        // change-password-item
        <div className='change-password-wrraper'>
            <div className='change-password-item'>
                <h3 className='change-password-item-head-text'>Change password   <span onClick={() => handelShow('handelChange')}><Pen /></span></h3>
            </div>
            <div className='change-password-item'>
                <span className='change-password-item-head'>Current Password</span>
                {
                    show ?
                        <input className='profile-right-input' type="text" placeholder='* * * * * * *' /> :
                        <span>* * * * * * *</span>
                }
            </div>
            {
                show &&
                <>
                    <div className='change-password-item'>
                        <span className='change-password-item-head'>Conferm Password</span>
                        <input className='profile-right-input' type="text" placeholder='* * * * * * *' />
                        <span className='change-password-item-head'>Password should have atleast 8 characters including 1 special character.</span>
                    </div>
                    <div className='change-password-item'>
                        <button className='update-password-btn'>Update</button>
                    </div>
                </>
            }
        </div>
    )
}

export default ChangePassword