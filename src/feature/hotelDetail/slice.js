import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const hotelDetail = createSlice({
  name: "hotelDetail",
  initialState: {
    data:[],
    hotelDetail:[],
    RoomId:''
  },
  reducers: {
    addRoomData : (state, action) => {
      state.data = action.payload
    },
    selectedRoomId:(state, action)=>{
      state.RoomId = action.payload
    }
  },
});

export const {addRoomData, selectedRoomId} = hotelDetail.actions
export default hotelDetail;
