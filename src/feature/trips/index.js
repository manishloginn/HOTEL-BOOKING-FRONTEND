import { useParams } from "react-router-dom";
import Filters from "../filters";
import Navbar from "../search/Navbar";

import { useDispatch, useSelector } from "react-redux";



import HotelsList from "./HotelsList";
import './styles/index.scss'
import { useEffect } from "react";
import { storeData } from "./slice";

const TripsScreen = () => {
  const params = useParams()
  const dispatch = useDispatch()

  const data = useSelector((state) => state?.search?.hotelData?.data)


  const filterData = data?.filter((value) => value.location.toLowerCase().includes(params.location.toLowerCase()))

  console.log(filterData)

  useEffect(()=> {
    dispatch(storeData(filterData))
  }, [dispatch])

  

  return (

    <div  >
      <Navbar />
      <div className="tripbox">
        <Filters />
        <HotelsList  />
      </div>
    </div>

  );
};

export default TripsScreen;
