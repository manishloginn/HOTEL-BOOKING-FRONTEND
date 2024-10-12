import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const initialState = {
  hotelData:[]
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    initialState,
  },
  reducers: {
    addHotelData : (state, action) => {
      state.hotelData = action.payload
    }
  },
});

export const {addHotelData} = searchSlice.actions
export default searchSlice;
