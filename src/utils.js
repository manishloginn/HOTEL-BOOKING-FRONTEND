import Endpoints from "./network/endpoints"
import request from "./network/request"
import { toggleLogin } from "./feature/search/slice"
import { notification } from "antd"




export const bookingSend = ({ roomId, formData, dispatch }) => {


    if (!roomId) {
       return notification.warning({
            message:"Room Required",
             description:"Please Select A Room First"
        })
    }

    const roomBook = async () => {
        const httpConfig = {
            url: Endpoints.bookRoom,
            method: "POST",
            data: {
                roomId: roomId,
                startDate: formData.checkindate,
                endDate: formData.checkoutdate,
                guest: formData.guest
            }
        }

        try {
            const result = await request(httpConfig)
            if (result.success) {
                if (result.data.status === 401) {
                    notification.warning({
                        message: 'Login Required',
                        description: 'Please login to proceed with the booking.',
                    })
                    // alert('please login')
                    dispatch(toggleLogin())
                } else {
                    notification.success({
                        message:'Booking Successfull'
                    })
                }
            } else {
                console.error("Error fetching hotel data:", result.data);
            }

        } catch (error) {
            console.error("Request failed:", error);
        }
    }

    roomBook()

}
