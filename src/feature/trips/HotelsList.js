import { useSelector } from "react-redux"
import Hotel from "./Hotel"
import './styles/index.scss'




const HotelsList = () => {
    const data = useSelector((state) => state.trips.data)

    console.log(data)

    const amenitiesss = Array.from(
        new Set(data?.amenities?.map((item) => item.amenities))
    )


    console.log(amenitiesss)

    // const uniqueCities = Array.from(
    //     new Set(cities?.data?.map((item) => item.location))
    //   )


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