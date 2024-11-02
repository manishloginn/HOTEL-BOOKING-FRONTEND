import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './../styles/BookingDetails.scss'
import request from '../../../network/request'
import Endpoints from '../../../network/endpoints'
import formatDate from './formatDate'
import Cookies from 'js-cookie'
import Navbar from '../../search/Navbar'
import { notification } from 'antd'

const BookingDetails = () => {
    const { bookingId } = useParams()
    const [booking, setBooking] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const token = Cookies.get("userToken")
        if (!token) {
            notification.warning({
                message: 'Please Login First'
            })
            navigate('/')
        }
        const fetchBookingDetails = async () => {
            try {
                const { success, data } = await request({
                    url: Endpoints.mySingleBooking,
                    method: "POST",
                    data: { bookingId }
                })
                setBooking(data)

            } catch (error) {
                console.log('error', error)
            }
        }
        fetchBookingDetails()
    }, [])


    if (booking === null) {
        return <h2>fetching...</h2>
    }

    return (
        <>
            <Navbar />
            <div className='BookingDetails'>
                <h1 className='BookingDetails-heading'>Your booking has been <span style={{ color: "green" }}>{booking?.status}</span></h1>
                <div className='booking-wrraper'>
                    <div className='booking-id-name-by'>
                        <div >
                            <h3>Booking Id</h3>
                            <span>{booking?._id}</span>
                        </div>
                        <span>Booked by {booking?.userId?.username?.split(" ")[0]} {booking?.createdAt && formatDate(booking.createdAt)}</span>
                    </div>
                    <div className="hotel-details-wrraper">
                        <div className="hotel-details-left">
                            <h4>{booking?.hotelId?.name}</h4>
                            <h6>{booking?.hotelId?.description} </h6>
                            <span>{booking?.hotelId?.location}</span>
                        </div>
                        <div className="hotel-details-right">
                            <img src={booking?.hotelId?.images[0]} alt="" />
                        </div>
                    </div>
                    <div className="guiestsInfo-and-chekin-checkout">
                        <div className='guiestsInfo-cell-guest'>
                            <h4>Primary Guest</h4>
                            <span>Mohammad</span>
                        </div>
                        <div className="guiestsInfo-cell-checkin-date">
                            <h4>Check In</h4>
                            <span>{booking?.checkInDate && formatDate(booking?.checkInDate)}</span>
                        </div>
                        <div className="guiestsInfo-cell-checkin-time">
                            <h4>Check In Time</h4>
                            <span>12:00 PM</span>
                        </div>
                        <div className="guiestsInfo-cell-duration">
                            <h2>1 Night</h2>
                        </div>
                        <div className="guiestsInfo-cell-mobile">
                            <h4>Mobile Number</h4>
                            <span>{booking?.userId?.mobile ? booking?.userId?.mobile : "NA"}</span>
                        </div>
                        <div className="guiestsInfo-cell-checkour-date">
                            <h4>Check Out</h4>
                            <span>{booking?.checkOutDate && formatDate(booking?.checkOutDate)}</span>
                        </div>
                        <div className="guiestsInfo-cell-checkout-time">
                            <h4>Check Out Time</h4>
                            <span>11:00 AM</span>
                        </div>
                        <div className="guiestsInfo-cell-guest">
                            <span>1 Guest</span>
                        </div>
                        <div className="guiestsInfo-cell-room">
                            <h4>1 Room</h4>
                            <span>Classic</span>
                        </div>
                        <div className="guiestsInfo-cell-email">
                            <h4>Email Address</h4>
                            <span>{booking?.userId?.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingDetails