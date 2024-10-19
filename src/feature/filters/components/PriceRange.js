import { Slider } from 'antd';
import './../styles/index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterData } from '../../trips/slice';
import { useEffect, useState } from 'react';

const PriceRange = () => {
  const state = useSelector((store) => store.trips.data);
  const dispatch = useDispatch();

  // Extracting price data
  const prices = state ? state.map((hotel) => hotel.price) : [];
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 10;

 
  const [range, setRange] = useState([minPrice, maxPrice]);
  
useEffect(() => {
    setRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

 
  const handlePriceRange = (value) => {
    setRange(value); 
    // console.log('Sliding Range:', value);
  };

  
  const handleAfterChange = (value) => {
    // console.log('Final Selected Range:', value);
    const [min, max] = value;
    const filteredData = state.filter(
      (hotel) => hotel.price >= min && hotel.price <= max
    );
    dispatch(addFilterData(filteredData));
  };

  return (
    <>
      <h4>Price</h4>
      <Slider
        range
        value={range}
        min={minPrice}
        max={maxPrice}
        onChange={handlePriceRange}
        onAfterChange={handleAfterChange} 
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
