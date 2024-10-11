import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import "./style/page.scss"


import { UsergroupDeleteOutlined } from '@ant-design/icons';


const CitySearch = () => {

  const [formData, setformData] = useState({
    location: '',
    checkindate: "",
    checkoutdate: "",
    guest: 1
  })

  const navigate = useNavigate()


  const handelclick = () => {
    navigate(`/search/${formData.location}/${formData.checkindate}/${formData.checkoutdate}/${formData.guest}`)
    // navigate('/search/:location/:checkindate/:checkoutdate/:guest')
  }



  const formchangeHandel = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    })
  }

  console.log(formData)

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="inputcontainer">
        <div className="inputfields">
          <input
            style={{ width: "200px" }}
            type="text"
            name="location"
            placeholder="Search City"
            required
            onChange={formchangeHandel}
          />
          <input
            type="date"
            name="checkindate"
            required
            onChange={formchangeHandel}
          />
          <input
            type="date"
            name="checkoutdate"
            required
            onChange={formchangeHandel}
          />
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

          <button  onClick={handelclick}>Search</button>
        </div>


      </div>

    </div>
  );
};

export default CitySearch;
