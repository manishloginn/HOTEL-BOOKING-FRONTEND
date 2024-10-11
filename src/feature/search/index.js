import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import "./style/page.scss";


import { Calendar, theme } from 'antd';



import { LineOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import dayjs from "dayjs";



const CitySearch = () => {

  const { token } = theme.useToken();

  const [formData, setformData] = useState({
    location: '',
    checkindate: dayjs().format('YYYY-MM-DD'),
    checkoutdate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
    guest: 1
  })
  const [checkinTrue, setcheckinTrue] = useState(false)
  const [checkOutTrue, setcheckOutTrue] = useState(false)

  const navigate = useNavigate()




  const handelclick = () => {
    if (!formData.location || !formData.checkindate || !formData.checkoutdate || !formData.guest) {
      alert('please fill all detail')
    } else {
      navigate(`search/${formData.location}/${formData.checkindate}/${formData.checkoutdate}/${formData.guest}`)
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
    console.log('Selected Check-out Date:', date);
    setformData((prev) => ({ ...prev, checkindate: date }));
  };

  const onCheckOutChange = (value) => {
    const date = value.format('YYYY-MM-DD');
    setformData((prev) => ({ ...prev, checkoutdate: date }));
  };

  const haldelcheckinCalender = () => {
    if (checkOutTrue) {
      setcheckOutTrue(false)
    }
    setTimeout(() => {
      setcheckinTrue((prev) => !prev)
    }, 100);

  }

  const haldelCheckoutCalender = () => {
    if (checkinTrue) {
      setcheckinTrue(false)
    }
    setTimeout(() => {
      setcheckOutTrue((prev) => !prev)
    }, 100);

  }

  console.log(formData)




  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    position: "absolute",
    top: "370px",   // Adjust as needed
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="inputcontainer">
        <div className="inputfields">
          <input className="cityname"
            type="text"
            name="location"
            placeholder="Search City"
            onChange={formchangeHandel}
          />
          <div className="calender">
            <p onClick={haldelcheckinCalender}>{formData.checkindate} </p>
            {
              checkinTrue && <div style={wrapperStyle}>
                <Calendar
                  fullscreen={false}
                  onChange={onCheckinChange}
                  disabledDate={(current) => current && current < dayjs().startOf('day')}
                />
              </div>
            }
            <LineOutlined />
            <p onClick={haldelCheckoutCalender}>{formData.checkoutdate}</p>
            {
              checkOutTrue && <div style={wrapperStyle}>
                <Calendar
                  fullscreen={false}
                  onChange={onCheckOutChange}
                  disabledDate={(current) => current && current < dayjs().startOf('day')}
                />
              </div>
            }
          </div>


          <label className="inputlabel">
            <input
              style={{ width: "30px" }}
              type="text"
              name="guest"
              value={formData.guest}
              required
              onChange={formchangeHandel}
            />
            <UsergroupDeleteOutlined />
          </label>

          <button onClick={handelclick}>Search</button>
        </div>


      </div>

    </div>
  );
};

export default CitySearch;
