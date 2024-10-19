import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const initialState = {
  hotelData:[],
  searchData:{
    location:'',
    checkindate:'',
    checkoutdate:'',
    guest:0
  }
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    initialState,
  },
  reducers: {
    addHotelData : (state, action) => {
      
      state.hotelData = action.payload
    },
    
    addSearchValue : (state, action) => {
      
      // const [key, value] = action.payload
      state.searchData = action.payload
    }
  },
});

export const {addHotelData, addSearchValue} = searchSlice.actions
export default searchSlice;
