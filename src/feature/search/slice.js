import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const initialState = {
  hotelData: [],
  searchData: {
    location: '',
    checkindate: '',
    checkoutdate: '',
    guest: 0
  },
  togglePopup: false
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addHotelData: (state, action) => {
      state.hotelData = action.payload
    },

    addSearchValue: (state, action) => {
      state.searchData = { ...state.searchData, ...action.payload };
    },
    toggleLogin: (state) => {
      state.togglePopup = !state.togglePopup;
    },
  },
});

export const { addHotelData, addSearchValue, toggleLogin } = searchSlice.actions
export default searchSlice;
