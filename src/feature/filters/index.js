import './styles/index.scss'
import PriceRange from './components/PriceRange';
import HotelFacilities from './components/HotelFacilities';

const Filters = () => {


  return (
    <div className="filter-section">
      <div className="filters-heading">
        <span>Filters</span>
        <h4>Popular locations in Bangalore, Karnataka, India</h4>
      </div>

      <div className="filters-price">
        <PriceRange />
      </div>

      <div className="accomadation-type">
        <HotelFacilities />
      </div>

    </div>
  );
};

export default Filters;
