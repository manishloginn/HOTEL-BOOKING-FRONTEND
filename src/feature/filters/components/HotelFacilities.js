import { Checkbox } from 'antd'
import './../styles/index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addFilterData } from '../../trips/slice'

const HotelFacilities = () => {
    const state = useSelector(store => store.trips.data)
    const dispatch = useDispatch()
    let amenitiess = new Set()
    state && state.forEach(hotel => {
        hotel?.amenities.forEach(amenity => amenitiess.add(amenity))
    })
    amenitiess = Array.from(amenitiess)

    const handelCheck = (e) => {
        let check = e.target
        if (check.checked) {
            const filteredData = state.filter(room => {
                return room.amenities.includes(check.value);
            });
            dispatch(addFilterData(filteredData))
        } else {
            const filteredData = state.filter(room => {
                return !room.amenities.includes(!check.value);
            });
            dispatch(addFilterData(filteredData))
        }
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
                                value={amenity}
                                onChange={handelCheck}
                            />
                            <span>{amenity}</span>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default HotelFacilities