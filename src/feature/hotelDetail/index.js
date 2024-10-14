import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Endpoints from "../../network/endpoints";
import request from "../../network/request";
import { useDispatch, useSelector } from "react-redux";
import { addRoomData } from "./slice";
import "./style/hotelDetail.scss";

import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


import getAmenity from "../trips/getAmenity";


const HotelDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const hotelDetail = useSelector((state) => state.hotelDetail.data.hotelDetail);
  const roomDetail = useSelector((state) => state.hotelDetail.data.data);

  console.log(hotelDetail)
  console.log(roomDetail)

  useEffect(() => {
    const fetchHotel = async () => {
      const httpConfig = {
        url: Endpoints.fetchSelectedHotel,
        method: "POST",
        data: { hotelId: params.hotelId },
      };

      try {
        const result = await request(httpConfig);
        if (result.success) {
          dispatch(addRoomData(result.data));
        } else {
          console.error("Error fetching hotel data:", result.data);
        }
      } catch (error) {
        console.error("Request failed:", error);
      }
    };
    fetchHotel();
  }, [params.hotelId, dispatch]);


  const onRoomSelect = (e) => {
    console.log(e.target.id)
  }




  return (
    <div className="hotelDetailContainer">
      <div className="images">
        {hotelDetail?.images.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`Hotel ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="hotelDetailbelow">
        <div className="hotelDetail">
          <h1>{hotelDetail?.name}</h1>
          <p className="hotelLocation">{hotelDetail?.location}</p>
          <div className="hotelamenities">
            <h3>Amenities</h3>
            <div className="amenityhead">
              {hotelDetail?.amenities.map((item, index) => (
                <div className="amenity-wrraper-amenity" key={index}>
                  <span className="amenity-icon">{getAmenity(item)}</span>
                  <span className="amenity-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>About this HOTEL</h3>
            <p style={{ color: "gray" }}>{hotelDetail?.description}</p>
          </div>
          <div className="roomSelection">
            <h3>Choose your room</h3>
            <div className="roomFilter">
              {roomDetail?.length > 0 ? (
                roomDetail.map((room, index) => (
                  <div className="roomcart" key={index}>
                    <div className="starCategary">
                      <StarOutlinedIcon style={{ color: "yellow", fontSize: "15px" }} /> Selected
                      <span> Category</span>
                    </div>
                    <div className="roomcartDetail">
                      <h4>{room.roomtype} <span><CheckCircleRoundedIcon style={{ color: "Green" }} /></span></h4>
                      <p>Room Capacity: Maximum {room.capacity} Guest</p>
                      <div className="amenitiesss">
                        {
                          room.amenities.map((amenity) => (
                            <div className="amenitiesssbelow">
                              <span className="amenity-icon">{getAmenity(amenity)}</span>
                              <span className="amenity-text">{amenity}</span>
                            </div>
                          ))
                        }
                      </div>

                    </div>
                    <div className="priceSection">
                      <div className="priceUpper">
                        <h3 className="price">₹{(hotelDetail.price - hotelDetail.price * 0.10).toFixed(2)}</h3>
                        <span className="strile-price"><strike>₹{hotelDetail.price}</strike></span>
                      </div>
                      <div className="selectRoom">
                        <button id={room._id} onClick={onRoomSelect}>Selected</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No rooms available.</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <h1>Second</h1>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
