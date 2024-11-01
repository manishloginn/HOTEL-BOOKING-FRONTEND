import './styles/Profile.scss'
import Navbar from '../search/Navbar'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileDetails } from './redux/thunk'
import EditProfile from './component/EditProfile'
import ChangePassword from './component/ChangePassword'

const Profile = () => {

    const [show, setShow] = useState({
        editProfile: false,
        changePassword: false
    })

    const apiStatus = useSelector(store => store.profileSlice.apiStatus)
    const profileDetails = useSelector(store => store.profileSlice.data)
    const dispatch = useDispatch()

    const handelShow = (type) => {
        if (type === 'editProfile') {
            if (show.editProfile) {
                setShow({
                    ...show,
                    editProfile: false
                })
            } else {
                setShow({
                    changePassword: false,
                    editProfile: true
                })
            }
        } else {
            if (show.changePassword) {
                setShow({
                    ...show,
                    changePassword: false
                })
            } else {
                setShow({
                    editProfile: false,
                    changePassword: true
                })
            }
        }
    }

    useEffect(() => {
        dispatch(fetchProfileDetails())
    }, [])

    return (
        <div>
            <Navbar />
            <div className="profile-page-wrraper">
                <EditProfile show={show.editProfile} handelShow={handelShow} profileDetails={profileDetails} />
                <ChangePassword show={show.changePassword} handelShow={handelShow} profileDetails={profileDetails} />
            </div>
        </div>
    )
}

export default Profile