import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profileRespone: null,
        apiStatus: "init",
        data: null
    },
    reducers: {
        updateProfileStatus: (state, action) => {
            state.apiStatus = action?.payload?.status;
            if (action.payload.status === "success") {
                state.data = action.payload.data
                state.profileRespone = true
            }
        }
    }
})

export const { updateProfileStatus } = profileSlice.actions;
export default profileSlice;