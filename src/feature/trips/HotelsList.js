import { useDispatch, useSelector } from "react-redux"
import Hotel from "./Hotel"
import './styles/index.scss'
import { useEffect } from "react"
import { addFilterData } from "./slice"




const HotelsList = () => {
    const data = useSelector((state) => state.trips.data)
    const filterData  = useSelector((state)=>state.trips.filterData)

    // console.log(filterData)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(data && data.length > 0){
            dispatch(addFilterData(data))
        }
    }, [ dispatch])

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