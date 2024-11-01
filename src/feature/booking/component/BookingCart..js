import { useNavigate } from "react-router-dom"
import formatDate from "./formatDate"

const BookingCart = ({booking}) => {
    const navigate = useNavigate()

    return (
        <div className="bookig-cart" >
            <div className="bookig-cart-left">
                <div className="image-box">
                    <img src={booking?.hotelId?.images[0]} alt={booking?.hotelId?.name} />
                </div>
                <div className="details-box">
                    <h4>{booking?.hotelId?.name}</h4>
                    <div className="details-box-dates">
                        <span>{formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}</span>
                        <span>{booking?.guests} Guest, {booking?.roomId?.bookedDates?.length > 1 ? booking?.roomId?.bookedDates.length : 1} Room</span>
                    </div>
                </div>
            </div>
            <div className="bookig-cart-right">
                <h4 className='bookig-cart-id'>{booking?._id}</h4>
                <div className="booking-status-payment">
                    <h4 className='booking-status-payment-status '>{booking.status} Booking</h4>
                    <h5 className='booking-amount'>Booking Amount: ₹{booking.totalPrice}</h5>
                    <span onClick={()=>navigate(`/book/${booking._id}`)}>ViewDetails</span>
                    <span>Need Help?</span>
                </div>
            </div>
        </div>
    )
}

export default BookingCart