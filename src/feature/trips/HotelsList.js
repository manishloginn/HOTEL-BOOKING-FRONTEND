import { useSelector } from "react-redux"
import Hotel from "./Hotel"
import './styles/index.scss'




const HotelsList = () => {
    const data = useSelector((state) => state.trips.data)

    return (
        <div className="hotel-list-wrraper">
            {
            data?.map((hotel) => {
                return <Hotel key={hotel.name} hotel={hotel} />
            })
        }
        </div>
    )
}

export default HotelsList