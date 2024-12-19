import Endpoints from "../../network/endpoints"
import request from "../../network/request"
import { updateBookingssStatus } from "./slice"


export const fetchBookings = () => {
    return async (dispatch) => {
        
        dispatch(updateBookingssStatus({ status: "pending" }))
        const { success, data } = await request({
            url: Endpoints.myBookings,
            method: "GET",
        })
        if (success) {
            dispatch(updateBookingssStatus({ status: "success", data: data }))
        }else{
            dispatch(updateBookingssStatus({status: "error"}))
        }
    }
}