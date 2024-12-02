import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    hotelFacilities:null,
    minprice:0,
    maxprice:0,
  },
  reducers: {
    addInitialState: (state, action ) => {
      state.hotelFacilities = action.payload
    },
    setminprice:(state, action ) => {
      state.minprice = action.payload
    },
    setmaxprice:(state, action) => {
      state.maxprice = action.payload
    }
  },
});


export const { addInitialState, setminprice, setmaxprice } = filtersSlice.actions
export default filtersSlice;
