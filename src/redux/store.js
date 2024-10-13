import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../feature/search/slice";
import filtersSlice from "../feature/filters/slice";
import bookingSlice from "../feature/booking/slice";
import tripsSlice from "../feature/trips/slice";
import hotelDetail from "../feature/hotelDetail/slice";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    filters: filtersSlice.reducer,
    booking: bookingSlice.reducer,
    trips: tripsSlice.reducer,
    hotelDetail:hotelDetail.reducer
  },
});

export default store;
