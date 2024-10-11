import { useParams } from "react-router-dom";
import Filters from "../filters";
import Navbar from "../search/Navbar";

const TripsScreen = () => {
  const params = useParams()


  console.log(params)


  return (
    <div >
      <Navbar />
      <div>
        <Filters />
        <p>This is the trips screen where user can find all trips</p>
      </div>
    </div>
  );
};

export default TripsScreen;
