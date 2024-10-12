import { useParams } from "react-router-dom";
import Filters from "../filters";
import Navbar from "../search/Navbar";
import HotelsList from "./HotelsList";
import './styles/index.scss'

const TripsScreen = () => {
  const params = useParams()


  console.log(params)


  return (

    <div  >
      <Navbar />
      <div className="tripbox">
        <Filters />
        <HotelsList />
      </div>
    </div>

  );
};

export default TripsScreen;
