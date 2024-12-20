import { Slider } from 'antd';
import './../styles/index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterData } from '../../trips/slice';
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';

const PriceRange = () => {


  const state = useSelector((store) => store.trips.filterData);
  const originalData = useSelector((store) => store.trips.data);
  const dispatch = useDispatch();

  console.log(state)
  console.log(originalData)

  

  // Extracting price data
  const prices = originalData?.length>0 ? originalData.map((hotel) => hotel.price) : [];
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 10;


  // console.log(state)
 
  const [range, setRange] = useState([minPrice, maxPrice]);

  // console.log(range)
  
useEffect(() => {
    setRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

console.log("render")
 
  const handlePriceRange = (value) => {
    setRange(value); 
    const [min, max] = value;
    // console.log(min, max) 
    const filterData = originalData.filter((hotel) => hotel.price >= min && hotel.price <=max)

    dispatch(addFilterData({selectedamenities:filterData}))
    // console.log('Sliding Range:', value);
  };

  
  // const handleAfterChange = (value) => {
  //   // console.log('Final Selected Range:', value);
  //   const [min, max] = value;
  //   const filteredData = state?.filter(
  //     (hotel) => hotel.price >= min && hotel.price <= max
  //   );
  //   console.log(filteredData)
  //   dispatch(addFilterData({selectedamenities:filteredData}));
  // };

  return (
    <>
      <h4>Price</h4>
      <Slider
        range
        value={range}
        min={minPrice}
        max={maxPrice}
        onChange={handlePriceRange}
        // onAfterChange={handleAfterChange} 
        className="ccustom-range"
        trackStyle={[{ backgroundColor: '#EE2E24' }]}
        handleStyle={[
          { borderColor: '#EE2E24', backgroundColor: '#EE2E24' },
        ]}
      />
      <div className="filters-price-wrraper">
        <p>₹ {minPrice}</p>
        <p>₹ {maxPrice}</p>
      </div>
    </>
  );
};

export default PriceRange;
