import { Calendar } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { LineOutlined } from '@ant-design/icons';
import ErrorIcon from '@mui/icons-material/Error';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { bookingSend } from '../../utils';
import { LoginCalling } from '../search/NavLinks';
import { useParams } from 'react-router-dom';

const PriceCart = ({ roomdata }) => {

    const dispatch = useDispatch()
    const [checkinTrue, setcheckinTrue] = useState(false)
    const [checkOutTrue, setcheckOutTrue] = useState(false)
    const [toggleCity, settoggleCity] = useState(false)

    const roomId = useSelector((state) => state.hotelDetail.RoomId)

    const params = useSelector((state) => state.search.searchData)
    // console.log(params)

    const popup = useSelector((state) => state.search.togglePopup)

    console.log(popup)

    const urlparams = useParams()


    const [formData, setformData] = useState({
        checkindate: params.checkindate,
        checkoutdate: params.checkoutdate,
        guest: params.guest
    })

    const hotelDetail = useSelector((state) => state.hotelDetail.data.hotelDetail);
    const hotelId = hotelDetail?._id


    const haldelcheckinCalender = (e) => {
        if (checkOutTrue || toggleCity) {
            setcheckOutTrue(false)
            settoggleCity(false)
        }
        setTimeout(() => {
            setcheckinTrue((prev) => !prev)
        }, 100);

    }


    const onCheckinChange = (value) => {
        const date = value.format('YYYY-MM-DD');
        if (date !== value) {
            setcheckinTrue(false)
            setcheckOutTrue(true)
        }
        setformData((prev) => ({
            ...prev,
            checkindate: date,
            checkoutdate: dayjs(date).add(1, 'day').format('YYYY-MM-DD'),
        }));
    };

    const onCheckOutChange = (value) => {
        const date = value.format('YYYY-MM-DD');
        setformData((prev) => ({ ...prev, checkoutdate: date }));
    };


    const haldelCheckoutCalender = () => {
        if (checkinTrue || toggleCity) {
            setcheckinTrue(false)
            settoggleCity(false)
        }
        setTimeout(() => {
            setcheckOutTrue((prev) => !prev)
        }, 100);

    }

    const wrapperStyle = {
        display: "flex",
        justifyContext: "center",
        flexDirection: "column",
        textAlign: "center",
        width: 300,
        border: `1px solid lightGrey `,
        borderRadius: "10px",
        position: "absolute",
        backgroundColor: "white"
    };

    return (
        <>
           {
                popup && <LoginCalling />
            }
        <div>
        
            <div className="priceUpper">
                <div className='pricesection'>
                    <h3 >₹{(hotelDetail?.price - hotelDetail?.price * 0.10).toFixed(2)}</h3>
                    <span ><strike style={{ color: "gray" }} >₹{hotelDetail?.price }</strike></span>
                </div>
                <div className="calender">
                    <div className="calenderhover">
                        <span className="dateshown">
                            <h5 onClick={haldelcheckinCalender}>{formData.checkindate ? formData.checkindate : urlparams.checkindate} </h5>
                        </span>
                        {
                            checkinTrue && <div style={wrapperStyle}>
                                <p>CHECK IN</p>
                                <Calendar
                                    fullscreen={false}
                                    onChange={onCheckinChange}
                                    disabledDate={(current) => current && current < dayjs().startOf('day')}
                                />
                            </div>
                        }
                    </div>
                    <LineOutlined />
                    <div className="calenderhover">
                        <span className="dateshown">
                            <h5 onClick={haldelCheckoutCalender}>{formData.checkoutdate ? formData.checkoutdate : urlparams.checkoutdate}</h5>
                        </span>
                        {
                            checkOutTrue && <div style={wrapperStyle}>
                                <p>CHECK OUT</p>
                                <Calendar
                                    fullscreen={false}
                                    onChange={onCheckOutChange}
                                    disabledDate={(current) => {
                                        const checkindate = dayjs(formData.checkindate).add(1, ('day'));
                                        return current && (current < checkindate || current < dayjs().startOf('day'))
                                    }}
                                />
                            </div>
                        }
                    </div>
                    <div>
                        <span>|</span>
                    </div>
                    <div>
                        <span>{formData.guest ? formData.guest : urlparams.guest} <b>Guest</b> </span>
                    </div>

                </div>


                <div className='roomType'>
                    {Array.isArray(roomdata) && roomdata.length > 0 ? (
                        roomdata.map((value, index) => (
                            <div className='error' key={index} style={{ cursor: 'pointer' }}>
                                <span> <MeetingRoomIcon style={{ color: "gray" }} /> </span>
                                <b key={index}>{value.roomtype}</b>
                            </div>
                        ))
                    ) : (
                        <div className='error'>
                            <span> <ErrorIcon style={{ color: "red" }} /> </span>
                            <b>Select a room first</b>
                        </div>
                    )}
                </div>
                <div className='totalPriceContainer'>
                    <div>
                        <b>Total price</b>
                        <p>Including taxes & fees</p>
                    </div>
                    <div>
                        <b>₹{(hotelDetail?.price - hotelDetail?.price * 0.10).toFixed(0)}</b>
                    </div>
                </div>
                <div className="submitButton">
                    <button id={roomId} onClick={() => bookingSend({hotelId, roomId, formData, dispatch})}>Continue to Book</button>
                </div>
            </div>
        </div>
         
            </>
    )
}

export default PriceCart
