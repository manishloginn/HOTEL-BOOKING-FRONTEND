import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import "./style/page.scss"

const CitySearch = () => {

  const [formData, setformData] = useState({

  })

  const navigate = useNavigate()


  const handelclick = () => {
    navigate('/search/:location/:checkindate/:checkoutdate/:guest')
  }



  const formchangeHandel = () => {

  }


  return (
    <div>
      <div>
        <Navbar />
      </div>

      <form className="inputcontainer">
        <div className="inputfields">
          <input
            style={{ width: "200px" }}
            type="text"
            name="city"
            placeholder="Search City"
            required
            onChange={() => formchangeHandel}
          />
          <input
            type="date"
            name="checkindate"
            required
            onChange={() => formchangeHandel}
          />
          <input
            type="date"
            name="checkoutdate"
            required
            onChange={() => formchangeHandel}
          />
          <input
            style={{ width: "70px" }}
            type="text"
            name="guest"
            required
            onChange={() => formchangeHandel}
          />
        </div>
        <div className="buttonn">
          <button type="submit">Search</button>
        </div>
      </form>

    </div>
  );
};

export default CitySearch;
