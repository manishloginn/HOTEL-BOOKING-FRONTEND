import Endpoints from "../../../network/endpoints"
import request from "../../../network/request"
import { updateProfileStatus } from "./slice"

export const fetchProfileDetails = () => {
    return async (dispatch) => {
        dispatch(updateProfileStatus({ status: "pending" }))

        const { success, data } = await request({
            url: Endpoints.profile,
            method: "GET"
        })

        if (success) {
            dispatch(updateProfileStatus({ status: "success", data: data }))
        } else {
            dispatch(updateProfileStatus({ status: "error" }))
        }

    }
}