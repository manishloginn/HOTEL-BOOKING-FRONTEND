import './styles/Profile.scss'
import Navbar from '../search/Navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileDetails } from './redux/thunk'
import EditProfile from './component/EditProfile'
import ChangePassword from './component/ChangePassword'

const Profile = () => {

  

    // const apiStatus = useSelector(store => store.profileSlice.apiStatus)
    const profileDetails = useSelector(store => store.profileSlice.data)
    const dispatch = useDispatch()

   
    useEffect(() => {
        dispatch(fetchProfileDetails())
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <div className="profile-page-wrraper">
                <EditProfile  profileDetails={profileDetails} />
                <ChangePassword  profileDetails={profileDetails} />
            </div>
        </div>
    )
}

export default Profile