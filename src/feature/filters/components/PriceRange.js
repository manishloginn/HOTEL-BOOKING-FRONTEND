import { Slider } from 'antd'
import './../styles/index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addFilterData } from '../../trips/slice'
const PriceRange = () => {
    const state = useSelector(store => store.trips.data)
    const dispatch = useDispatch(addFilterData)
    const price = state && state?.map((hotel) => hotel.price)
    const minPrice = price && Math.min(...price)
    const maxPrice = price && Math.max(...price)

    const hnadlePriceRange = (e) => {
        const min = e[0]
        const max = e[1]
        const filteredData = state.filter((hotel) => hotel.price >= min && hotel.price <= max)
        dispatch(addFilterData(filteredData))
    }


    return (
        <>
            <h4>Price</h4>
            <Slider
                onChange={hnadlePriceRange}
                range
                min={minPrice ? minPrice : 0}
                max={maxPrice ? maxPrice : 10}
                className="ccustom-range"
                trackStyle={[{ backgroundColor: '#EE2E24' }]}
            />
            <div className='filters-price-wrraper'>
                <p>₹ {minPrice ? minPrice : 0}</p>
                <p>₹ {maxPrice ? maxPrice : 10}</p>
            </div>
        </>
    )
}

export default PriceRange