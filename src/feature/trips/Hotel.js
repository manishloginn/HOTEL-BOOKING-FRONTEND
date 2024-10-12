
import getAmenity from "./getAmenity";
// import Wifi from "../../icons/Wifi"
import "./styles/index.scss"

// import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
// import { useSelector } from "react-redux";

const Hotel = ({ hotel }) => {




    return (
        <div className="hotel">
            <div className="left-section">
              
            </div>
            <div className="right-section">
                <div className="hotelListing-descriotion-content">
                    <div className="hotelListing-descriotion-content-wrraper">
                        <h3>{hotel.name}</h3>
                        <p style={{ color: "lightgray" }}>{hotel.description}</p>
                        <span>{hotel.location}</span>
                    </div>

                    <div className="details-wrraper">
                        {/* <div className="hotel-rateing">
                            <div className="hotel-rateing-wrraper">
                                <span className="star-wrraper">{hotel.rating.value}<span><Star /></span></span>
                                <span className="ratimg-text">({hotel.rating.ratingsCount} Rtings)</span>
                                <span className="ratimg-text">- {hotel.rating.description}</span>
                            </div>
                        </div> */}
                        <div className="amenity-wrraper">
                            {
                                hotel.amenities.map((amenity) => (
                                    <div className="amenity-wrraper-amenity">
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
                    <div className="price-btn-text-wrraper">
                        <div className="price-btn-text-wrraper-price">
                            <span className="price">₹711</span>
                            <span className="strile-price"><strike>₹65432</strike></span>
                            <span className="percent-off">77%of</span>
                        </div>
                        <div id="price-btn-text-wrraper-tax" style={{ fontSize: '12px' }}>
                            spa- per room per night
                        </div>
                    </div>
                    <div className="price-btn-text-wrraper-buttoms">
                        <button className="view-details-btm">View Details</button>
                        <button className="book-now-btm">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel