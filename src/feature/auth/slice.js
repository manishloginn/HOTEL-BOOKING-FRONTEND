import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "authentication",
    initialState: {
        userName: '',
        role: ''
    },
    reducers: {
        addDetail: (state, action) => {
            state.userName = action.payload.username;
            state.role = action.payload.role;
        }
    }
})

export const { addDetail } = loginSlice.actions
export default loginSlice