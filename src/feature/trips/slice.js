import { createSlice } from "@reduxjs/toolkit";

// TODO: write the logic as per the need
const tripsSlice = createSlice({
  name: "trips",
  initialState: {
    data:[]
  },
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload
    }
  },
});

export const {storeData} = tripsSlice.actions
export default tripsSlice;
