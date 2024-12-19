import { useSelector } from "react-redux"
import Hotel from "./Hotel"
import './styles/index.scss'
import React, { useEffect } from "react"




const HotelsList = () => {
    const data = useSelector((state) => state.trips.data)
    const filterData = useSelector((state) => state.trips.filterData)


    useEffect(() => {
        console.log('render')
        console.log(filterData)
    }, [filterData])


    if (!filterData || filterData.length === 0) {
        return <div className="hotel-list-wrapper">No hotels found</div>;
      }

    return (
        <div className="hotel-list-wrraper">

            {filterData.map((hotel) => (
                <Hotel key={hotel.name} hotel={hotel} />
            ))}
        </div>
    )
}

export default React.memo(HotelsList);
