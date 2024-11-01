import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookingResponse: null,
    apiStatus: "init",
    data: null
  },
  reducers: {
    updateBookingssStatus: (state, action) => {
      state.apiStatus = action?.payload?.status;
      if(action.payload.status === "success"){
        state.data = action.payload.data
      }
    },
  },
});

export const { updateBookingssStatus } = bookingSlice.actions

export default bookingSlice;