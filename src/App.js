import { lazy, Suspense, useEffect, useState } from "react";
import './app.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingDetails from "./feature/booking/component/BookingDetails";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const Profile = lazy(() => import("./feature/profile/index"));
const Search = lazy(() => import("./feature/search/index"));
const TripsScreen = lazy(() => import("./feature/trips/index"));
const BookingScreen = lazy(() => import("./feature/booking/index"));
const HotelDetail = lazy(() => import("./feature/hotelDetail/index"))



const LazyLoadingWrapper = ({ Component }) => {
  return (
    <Suspense fallback={
      <Flex style={{display:"flex", width:'100vw' , height:"100vh", justifyContent:"center"}} align="center"  gap="middle">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 70 }} spin />} />
    </Flex>
    }>
      <Component />
    </Suspense>
  );
};



const App = () => {


  const [trail, setTrail] = useState(Array(5).fill({ x: 0, y: 0 }));

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
     
  //     setTrail((prevTrail) => [
  //       { x: event.pageX, y: event.pageY },
  //       ...prevTrail.slice(0, -1),
  //     ]);
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);


  return (

    <div>
      {/* Render each segment of the snake */}
      {trail.map((position, index) => (
        <div
          key={index}
          className="snake-segment"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            opacity: (trail.length - index) / trail.length, // Fades out progressively
          }}
        />
      ))}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LazyLoadingWrapper Component={Search} />} />
          <Route
            path="/profile"
            element={<LazyLoadingWrapper Component={Profile} />}
          />
          <Route
            path="/search/:location/:checkindate/:checkoutdate/:guest"
            element={<LazyLoadingWrapper Component={TripsScreen} />}
          />
          <Route
            path="/:hotelId/:location/:checkindate/:checkoutdate/:guest"
            element={<LazyLoadingWrapper Component={HotelDetail} />}
          />
          <Route
            path="/book"
            element={<LazyLoadingWrapper Component={BookingScreen} />}
          />
          <Route
            path="/book/:bookingId"
            element={<LazyLoadingWrapper Component={BookingDetails} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
