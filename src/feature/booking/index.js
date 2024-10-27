import { useEffect } from 'react';
import Navbar from '../search/Navbar';
import './styles/index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from './thunk';
import { bookingStatusSelector, bookingData } from './selectors';

function formatDate(isoDateString) {
  const date = new Date(isoDateString);

  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  return date.toLocaleDateString('en-US', options);
}

const BookingScreen = () => {

  const dispatch = useDispatch()
  const apiStatus = useSelector(bookingStatusSelector)
  const bookingList = useSelector(bookingData)

  useEffect(() => {
    dispatch(fetchBookings())
  }, [])

  return (
    <div>
      <Navbar />
      <div className='booking-page'>
        <div className="booking-wrraper">
          <div className='booking-heading'>
            <h3>Booking History</h3>
            <select name="" id="">
              <option value="">upcomeing</option>
            </select>
          </div>
          <div className="booking-list-wrraper">
            {
              apiStatus === "init" || apiStatus === "pending" &&
              <h2>Fetching...</h2>
            }
            {
              apiStatus === "error" &&
              <h2>Oh no we are feacing problem while fetching your bookings</h2>

            }
            {
              !bookingList &&
              <h2>Oops no bookings Available</h2>
            }
            {
              bookingList?.map((booking) => {
                return <div className="bookig-cart" key={booking._id}>
                  <div className="bookig-cart-left">
                    <div className="image-box">
                      <img src={booking?.hotelId?.images[0]} alt={booking?.hotelId?.name} />
                    </div>
                    <div className="details-box">
                      <h4>{booking?.hotelId?.name}</h4>
                      <div className="details-box-dates">
                        <span>{formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}</span>
                        <span>{booking?.guests} Guest, {booking?.roomId?.bookedDates.length > 1 ? booking?.roomId?.bookedDates.length : 1} Room</span>
                      </div>
                    </div>
                  </div>
                  <div className="bookig-cart-right">
                    <h4 className='bookig-cart-id'>{booking?._id}</h4>
                    <div className="booking-status-payment">
                      <h4 className='booking-status-payment-status '>{booking.status} Booking</h4>
                      <h5 className='booking-amount'>Booking Amount: ₹{booking.totalPrice}</h5>
                      <span>ViewDetails</span>
                      <span>Need Help?</span>
                    </div>
                  </div>
                </div>
              })
            }




          </div>
        </div>
      </div>
    </div>
  )
};

export default BookingScreen;
