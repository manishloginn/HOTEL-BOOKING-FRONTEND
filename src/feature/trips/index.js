import { useParams } from "react-router-dom";
import Filters from "../filters";
import Navbar from "../search/Navbar";

import { useDispatch, useSelector } from "react-redux";



import HotelsList from "./HotelsList";
import './styles/index.scss'
import { useEffect } from "react";
import { storeData } from "./slice";
import { addHotelData } from "../search/slice";
import request from "../../network/request";
import Endpoints from "../../network/endpoints";
import { notification } from "antd";

const TripsScreen = () => {
  const params = useParams()
  const dispatch = useDispatch()

  const data = useSelector((state) => state?.search?.hotelData?.data)

  const filterData = data?.filter((value) => value.location.toLowerCase().includes(params.location.toLowerCase()))
  // console.log(filterData)

  
  // const tripValue = useSelector((value) => value.search.searchData)
  // // console.log(tripValue)

  // console.log(params)

  dispatch(storeData(filterData))

  useEffect(()=> {

    const hotelDetchData = async () => {
      const httpConfig = {
        url: Endpoints.hotelData,
        method: "GET",
      }
      const result = await request(httpConfig)
      if (result.success) {
        dispatch(addHotelData(result.data))
      } else {
        console.error("Error fetching hotel data:", result.data);
      }
    }
    hotelDetchData()
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
