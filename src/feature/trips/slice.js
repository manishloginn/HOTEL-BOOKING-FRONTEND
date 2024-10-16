import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const tripsSlice = createSlice({
  name: "trips",
  initialState: {
    data:[],
    filterData: []
  },
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload
    },
    addFilterData: (state,action)=>{
      state.filterData = action.payload
    }
  },
});

export const {storeData,addFilterData} = tripsSlice.actions
export default tripsSlice;
