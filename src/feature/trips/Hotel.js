
import { useState } from "react";
import getAmenity from "./getAmenity";
import "./styles/index.scss"

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useNavigate } from "react-router-dom";
import Endpoints from "../../network/endpoints";
import request from "../../network/request";
import { useDispatch, useSelector } from "react-redux";
import { bookingSend } from "../../utils";


const Hotel = ({ hotel }) => {

    const dispatch = useDispatch()
    const [activeIndex, setActiveIndex] = useState(0);

    const formData = useSelector((state) => state.search.searchData)



    const navigate = useNavigate()

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? hotel.images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === hotel.images.length - 1 ? 0 : prevIndex + 1));
    };

    const handelDetail = (e) => {
        const hotelId = e.target.id
        navigate(`/${hotelId}/${formData.location}/${formData.checkindate}/${formData.checkoutdate}/${formData.guest}`)
    }

    const handelbookIntrip = (e) => {
        const hotelId = e.target.id
        // console.log(hotelId)

        const fetchRoom = async () => {
            const httpConfig = {
                url: Endpoints.fetchRoom,
                method: "POST",
                data: { hotelId: hotelId }
            }
            // console.log(httpConfig)
            try {
                const result = await request(httpConfig)
                // console.log(result)
                if (result.success) {
                   const roomId = result.data.data[0]._id
                   bookingSend({roomId, formData, dispatch})
                } else {
                    console.log("booking error")
                }
            } catch (error) {
                console.error("Error fetching hotel data:", error);
            }
    
        }
    
        fetchRoom()
    }


    return (
        <div className="hotel">
            <div className="left-section" key={"image"}>
                <div className="slides">
                    {hotel.images.map((item, index) => (
                        <div className={`slide ${index === activeIndex ? 'active' : 'none'}`} key={index}>
                            <img src={item} alt={index + 1} />
                            <div className="buttons">
                                <ArrowBackIosNewOutlinedIcon className="arrowback" onClick={handlePrev} />
                                <ArrowForwardIosOutlinedIcon className="arrowback" onClick={handleNext} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="right-section" >
                <div className="hotelListing-descriotion-content">
                    <div className="hotelListing-descriotion-content-wrraper">
                        <h3>{hotel.name}</h3>
                        <p style={{ color: "lightgray" }}>{hotel.description}</p>
                        <span>{hotel.location}</span>
                    </div>

                    <div className="details-wrraper" >
                        <div className="amenity-wrraper">
                            {
                                hotel.amenities.map((amenity, index) => (
                                    <div className="amenity-wrraper-amenity" key={index}>
                                        <span className="amenity-icon">
                                            {getAmenity(amenity)}
                                        </span>
                                        <span className="amenity-text">{amenity}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="hotelListing-descriotion-price-btn">

                    <div className="price-btn-text-wrraper-price">
                        <span className="price">₹{(hotel.price - hotel.price * 0.10).toFixed(2)}</span>
                        <span className="strile-price"><strike>₹{hotel.price}</strike></span>
                        <span className="percent-off">10%of</span>
                    </div>


                    <div className="price-btn-text-wrraper-buttoms">
                        <button onClick={handelDetail} id={hotel._id} className="view-details-btm">View Details</button>
                        <button className="book-now-btm" id={hotel._id} onClick={handelbookIntrip} >Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel