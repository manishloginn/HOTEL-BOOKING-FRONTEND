import { useEffect } from 'react';
import Navbar from '../search/Navbar';
import './styles/index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from './thunk';
import { bookingStatusSelector, bookingData } from './selectors';
import BookingCart from './component/BookingCart.';

const BookingScreen = () => {

  const dispatch = useDispatch()
  const apiStatus = useSelector(bookingStatusSelector)
  const bookingList = useSelector(bookingData)
  useEffect(() => {
    dispatch(fetchBookings())
  }, [])

  console.log(bookingList)

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
                return <BookingCart booking={booking} key={booking._id} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default BookingScreen;