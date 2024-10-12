import { useParams } from "react-router-dom";
import Filters from "../filters";
import Navbar from "../search/Navbar";
import HotelsList from "./HotelsList";
import './styles/index.scss'

const TripsScreen = () => {
  const params = useParams()


  console.log(params)


  return (
    <div >
      <div className="trip-wrraper">
        <div className="filters">
          <Filters />
        </div >
        <div className="HotelsList">
          <HotelsList />
        </div>
      </div>
    </div>
  );
};

export default TripsScreen;
