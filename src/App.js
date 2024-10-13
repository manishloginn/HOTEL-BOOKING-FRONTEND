import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Search = lazy(() => import("./feature/search/index"));
const TripsScreen = lazy(() => import("./feature/trips/index"));
const BookingScreen = lazy(() => import("./feature/booking/index"));
const HotelDetail = lazy(() => import("./feature/hotelDetail/index"))

const LazyLoadingWrapper = ({ Component }) => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Component />
    </Suspense>
  );
};

const App = () => {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LazyLoadingWrapper Component={Search} />} />
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
    </Routes>
  </BrowserRouter>
  );
};

export default App;
