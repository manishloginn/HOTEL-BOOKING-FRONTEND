import { Checkbox } from 'antd'
import './../styles/index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addFilterData } from '../../trips/slice'
import { useEffect } from 'react'
import { addInitialState, setmaxprice, setminprice } from '../slice'

const HotelFacilities = () => {
    const allData = useSelector(store => store.trips.data)
    const checkamenities = useSelector(store => store.filters.hotelFacilities) 
    const dispatch = useDispatch()
    let amenitiess = new Set()

    console.log(checkamenities)


    allData && allData.forEach(hotel => {
        hotel?.amenities.forEach(amenity => amenitiess.add(amenity))
    })

    const price = allData?.map((hotel) => hotel.price) || [];
    

    amenitiess = Array.from(amenitiess)


    useEffect(() => {
        if (!allData || allData.length === 0) return;

        const addininitialstate = amenitiess?.reduce((acc, amenity) => {
            acc[amenity] = false;
            return acc
        }, {})


        dispatch(addInitialState(addininitialstate))
       const minprice = Math.min(...price)
       const maxprice = Math.max(...price)

       
       dispatch(setminprice(minprice))
       dispatch(setmaxprice(maxprice))

    }, [allData, dispatch])


    const handelCheck = (e) => {
        const { value, checked } = e.target;
        const updatedAmenities = { ...checkamenities, [value]: checked };
        dispatch(addInitialState(updatedAmenities));
    
        const filteredData = allData.filter((room) =>
            checked ? room.amenities.includes(value) : true
        );
    
        dispatch(addFilterData(filteredData)); 
    

    }


    return (
        <>
            <h4>Hotel Facilities</h4>
            <div className='accomadation-type-wrraper'>
                {
                    amenitiess?.length > 0 &&
                    amenitiess.map((amenity) => {
                        return <div key={amenity} className='accomadation-parent'>
                            <Checkbox
                                id={amenity}
                                value={amenity}
                                onChange={handelCheck}
                            />
                            <label htmlFor={amenity}>{amenity}</label>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default HotelFacilities