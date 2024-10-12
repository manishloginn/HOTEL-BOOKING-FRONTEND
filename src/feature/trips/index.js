import { useParams } from "react-router-dom";
import Filters from "../filters";
import Navbar from "../search/Navbar";
import { useSelector } from "react-redux";
import './style/trip.scss'


const TripsScreen = () => {
  const params = useParams()

  const data = useSelector((state) => state?.search?.hotelData?.data)


  const filterData = data?.filter((value) => value.location.toLowerCase().includes(params.location.toLowerCase()))

  console.log(filterData)

  

  return (
    <div >
      <Navbar />
      <div className="tripbox">
        <Filters />
        <p>This is the trips screen where user can find all trips</p>
      </div>
    </div>
  );
};

export default TripsScreen;
