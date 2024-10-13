import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Endpoints from "../../network/endpoints";
import request from "../../network/request";
import { useDispatch, useSelector } from "react-redux";
import { addRoomData } from "./slice";

import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import "./style/hotelDetail.scss";
import getAmenity from "../trips/getAmenity";

const HotelDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const hotelDetail = useSelector((state) => state.hotelDetail.data.hotelDetail);
  const roomDetail = useSelector((state) => state.hotelDetail.data.data);

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

  const hotel = {
    name: "The Grand Palace",
    location: "New Delhi, India",
    description: "A luxurious hotel in the heart of the city.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Spa"],
    images: [
      "https://dummyimage.com/600x400/000/fff&text=The+Grand+Palace+1",
      "https://dummyimage.com/600x400/000/fff&text=The+Grand+Palace+2",
    ],
    createdAt: "2023-07-12T10:00:00Z",
    email: "info@grandpalacenewdelhi.com",
    password: "12345",
    role: "admin",
    price: 900,
  };

  return (
    <div className="hotelDetailContainer">
      <div className="images">
        {hotel.images.map((item, index) => (
          <div key={index}>
            <img src={item} alt={`Hotel ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="hotelDetailbelow">
        <div className="hotelDetail">
          <h3>{hotel.name}</h3>
          <p style={{ color: "gray" }}>{hotel.location}</p>
          <div className="hotelamenities">
            <h3>Amenities</h3>
            <div className="amenityhead">
              {hotel.amenities.map((item, index) => (
                <div className="amenity-wrraper-amenity" key={index}>
                  <span className="amenity-icon">{getAmenity(item)}</span>
                  <span className="amenity-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>About this HOTEL</h3>
            <p style={{ color: "gray" }}>{hotel.description}</p>
          </div>
          <div>
            <h3>Choose your room</h3>
            {roomDetail?.length > 0 ? (
              roomDetail.map((room, index) => (
                <div key={index}>
                  <p>
                    <StarOutlinedIcon style={{ color: "yellow" }} /> Selected
                    Category
                  </p>
                  <p>{room.roomtype}</p>
                </div>
              ))
            ) : (
              <p>No rooms available.</p>
            )}
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
