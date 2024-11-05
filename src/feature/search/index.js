import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style/page.scss";
import { Calendar, notification } from 'antd';
import { LineOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import dayjs from "dayjs";
import Endpoints from "../../network/endpoints";
import request from "../../network/request";
import { addHotelData, addSearchValue } from "./slice";



const CitySearch = () => {
  const dispatch = useDispatch()
  const [toggleCity, settoggleCity] = useState(false)
  const [formData, setformData] = useState({
    location: '',
    checkindate: dayjs().format('YYYY-MM-DD'),
    checkoutdate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
    guest: 2
  })
  const [checkinTrue, setcheckinTrue] = useState(false)
  const [checkOutTrue, setcheckOutTrue] = useState(false)

  const navigate = useNavigate()

  const cities = useSelector((state) => state.search.hotelData)

  const uniqueCities = Array.from(
    new Set(cities?.data?.map((item) => item.location))
  )

  const handelclick = () => {
    if (!formData.location || !formData.checkindate || !formData.checkoutdate || !formData.guest) {
      notification.warning({
        message: 'Please Fill All Detail'
      })

    } else {


      dispatch(addSearchValue(formData))
      navigate(`search/${formData.location}/${formData.checkindate}/${formData.checkoutdate}/${formData.guest}`)
      notification.success({
        message: 'Success',
        description: "Please Select A Hotel "
      })
    }
  }

  const formchangeHandel = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value
    }));
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

  const haldelcheckinCalender = (e) => {
    if (checkOutTrue || toggleCity) {
      setcheckOutTrue(false)
      settoggleCity(false)
    }
    setTimeout(() => {
      setcheckinTrue((prev) => !prev)
    }, 100);

  }

  const haldelCheckoutCalender = () => {
    if (checkinTrue || toggleCity) {
      setcheckinTrue(false)
      settoggleCity(false)
    }
    setTimeout(() => {
      setcheckOutTrue((prev) => !prev)
    }, 100);

  }



  useEffect(() => {

    const hotelDetchData = async () => {
      const httpConfig = {
        url: Endpoints.hotelData,
        method: "GET",
      }
      const result = await request(httpConfig)
      if (result.success) {
        dispatch(addHotelData(result.data))
      } else {
        console.error("Error fetching hotel data:", result.data);
      }
    }
    hotelDetchData()
  }, [dispatch])

  const haldelSelectCity = (e) => {
    // console.log(e.target.innerText)
    setformData(prev => ({
      ...prev,
      location: e.target.innerText
    }))
    settoggleCity(false)
  }




  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="inputcontainer">
        <div className="inputfields">
          <div className="hovercity">
            <input className="cityname"
              type="text"
              name="location"
              value={formData.location}
              placeholder="Search City"
              onChange={formchangeHandel}
              onClick={() => settoggleCity((prev) => !prev)}
            />

            {
              toggleCity &&
              <div className="hoverCities">
                {
                  uniqueCities && uniqueCities.map((item) => (
                    <div className="inner" key={item}>
                      < LocationCityIcon />
                      <span onClick={haldelSelectCity}>{item}</span>
                    </div>

                  ))
                }
              </div>
            }
          </div>
          <div className="calendertop">
            <div className="calender">
              <div className="calenderhover">
                <span className="dateshown">
                  <h5 onClick={haldelcheckinCalender}>{formData.checkindate} </h5>
                </span>

                {
                  checkinTrue && <div className="wrapperStyle">
                    <p>CHECK IN</p>
                    <Calendar
                      fullscreen={false}
                      onChange={onCheckinChange}
                      disabledDate={(current) => current && current < dayjs().startOf('day')}
                    />
                  </div>
                }

              </div>
              <LineOutlined className="line" />
              <div className="calenderhover">
                <span className="dateshown">
                  <h5 onClick={haldelCheckoutCalender}>{formData.checkoutdate}</h5>
                </span>
                {
                  checkOutTrue && <div className="wrapperStyle">
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
            </div>

            <div>
              <label className="inputlabel">
                <input
                  style={{ width: "50px" }}
                  type="number"
                  name="guest"
                  placeholder="Guest"
                  value={formData.guest}
                  required
                  onChange={formchangeHandel}
                />
                <UsergroupDeleteOutlined />
              </label>
            </div>
          </div>

          <button onClick={handelclick}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default CitySearch;
