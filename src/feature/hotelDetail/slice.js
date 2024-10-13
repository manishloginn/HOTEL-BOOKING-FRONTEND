import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const hotelDetail = createSlice({
  name: "hotelDetail",
  initialState: {
    data:[],
    hotelDetail:[]
  },
  reducers: {
    addRoomData : (state, action) => {
      state.data = action.payload
    }
  },
});

export const {addRoomData} = hotelDetail.actions
export default hotelDetail;
