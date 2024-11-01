import { Pen } from "lucide-react"
import './../styles/EditProfile.scss'

const EditProfile = ({ show, handelShow, profileDetails }) => {
    
    return (
        <div className="EditProfile-wrraper">
            <div className='EditProfile-item profile-left-item-top'>
                <h3>Edit profile <span onClick={() => handelShow("editProfile")}><Pen /></span></h3>
            </div>
            <div className='EditProfile-item'>
                <span className='EditProfile-item-head'>Full Name</span>
                {
                    show ?
                        <input className="EditProfile-input" type="text" placeholder='Enter Full Name' /> :
                        <span>{profileDetails?.username}</span>
                }
            </div>
            <div className='EditProfile-item'>
                <span className='EditProfile-item-head'>Phone Number</span>
                <span>{profileDetails?.mobile ? profileDetails.mobile : "NA"}</span>
            </div>
            <div className='EditProfile-item'>
                <span className='EditProfile-item-head'>Email Address</span>
                {
                    show ?
                        <input className="EditProfile-input" type="email" placeholder='Enter Your Email' /> :
                        <span>{profileDetails?.email}</span>
                }
            </div>
            <div className='EditProfile-item'>
                {
                    show &&
                    <button className='EditProfile-btn'>Update</button>
                }
            </div>
        </div>
    )
}

export default EditProfile