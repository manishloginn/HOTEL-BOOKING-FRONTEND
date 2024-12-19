import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const tripsSlice = createSlice({
  name: "trips",
  initialState: {
    data: [],
    filterData: []
  },
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload
    },
    addFilterData: (state, action) => {
      // console.log(data)
      const selectedamenities = action.payload.selectedamenities
      console.log("Selected Amenities:", selectedamenities);
      if (!selectedamenities) {
        // console.log('zero')
        state.filterData = state.data
      } else {
        // console.log('initial')
        state.filterData = selectedamenities
      }
    }
  },
});

export const { storeData, addFilterData } = tripsSlice.actions
export default tripsSlice;
