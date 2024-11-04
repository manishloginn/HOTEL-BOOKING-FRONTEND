import { useEffect, useMemo, useState } from 'react';
import Navbar from '../search/Navbar';
import './styles/index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from './thunk';
import { bookingStatusSelector, bookingData } from './selectors';
import BookingCart from './component/BookingCart.';
import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const BookingScreen = () => {


  const dispatch = useDispatch();
  const apiStatus = useSelector(bookingStatusSelector);
  const bookingList = useSelector(bookingData);
  const [value, setValue] = useState('Ongoing');
  const [showedData, setshowedData] = useState([]);

  const today = useMemo(() => {
    const date = new Date().toISOString();
    return date
  }, [])

  const upcomingJournies = useMemo(() => bookingList?.filter((booking) =>
    new Date(booking.checkInDate).toISOString() > today),
    [bookingList, today]
  )



  const pastJournies = useMemo(() =>
    bookingList?.filter((booking) =>
      new Date(booking.checkOutDate).toISOString() < today), [bookingList, today]
  );

  const presentBooking = useMemo(() => bookingList?.filter((booking) =>
    new Date(booking.checkInDate).toISOString() <= today && new Date(booking.checkOutDate).toISOString() >= today),
    [bookingList, today]
  );


  const handelselectorChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);

    if (selectedValue === "Ongoing") {
      setshowedData(presentBooking);
    } else if (selectedValue === "Upcoming Bookings") {
      setshowedData(upcomingJournies);
    } else {
      setshowedData(pastJournies);
    }
  };

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  useEffect(() => {

    if (value === "Ongoing") {
      setshowedData(presentBooking);
    } else if (value === "Upcoming Bookings") {
      setshowedData(upcomingJournies);
    } else {
      setshowedData(pastJournies);
    }
  }, [bookingList, value, presentBooking, upcomingJournies, pastJournies]);



  return (
    <div>
      <Navbar />
      <div className='booking-page'>
        <div className="booking-wrraper">
          <div className='booking-heading'>
            <h3>Booking History</h3>
            <select name="selectonbases" value={value} id="selectonbases" onChange={handelselectorChange}>
              <option value="Ongoing">Ongoing</option>
              <option value="Upcoming Bookings">Upcoming Bookings</option>
              <option value="Past">Past Bookings</option>
            </select>

          </div>
          <div className="booking-list-wrraper">
            {
              apiStatus === "init" && apiStatus === "pending" &&
              <Flex style={{ display: "flex", width: '100vw', height: "100vh", justifyContent: "center" }} align="center" gap="middle">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 70 }} spin />} />
              </Flex>

            }
            {/* {
              apiStatus === "error" &&
              <h2>Oh no we are feacing problem while fetching your bookings</h2>
            } */}
            {
              showedData?.length <= 0 && <h2>No Bookings</h2>
            }
            {
              !bookingList &&
              <h2>Oops no bookings Available</h2>
            }
            {
              showedData?.map((booking) => {
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