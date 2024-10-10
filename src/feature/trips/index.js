import Filters from "../filters";
import Navbar from "../search/Navbar";

const TripsScreen = () => {
  return (
    <div>
      <Navbar />
    <div>
      <p>This is the trips screen where user can find all trips</p>
      <Filters />
    </div>
    </div>
  );
};

export default TripsScreen;
