import Endpoints from "./network/endpoints"
import request from "./network/request"
import { toggleLogin } from "./feature/search/slice"
import { notification } from "antd"





export const bookingSend = ({ hotelId, roomId, formData, dispatch }) => {

    // console.log(hotelId, roomId, formData, dispatch)


    if (!roomId) {
        return notification.warning({
            message: "Room Required",
            description: "Please Select A Room First"
        })
    }

    const roomBook = async () => {

        const httpConfig = {
            url: Endpoints.bookRoom,
            method: "POST",
            data: {
                hotelId: hotelId,
                roomId: roomId,
                startDate: formData.checkindate,
                endDate: formData.checkoutdate,
                guest: formData.guest
            }
        }

        try {
            const result = await request(httpConfig)
            if (result.success) {
                if(result.data.status === 400 ){
                    notification.warning({
                        message:"Room Allreaddy booked in this Date",
                        description:"Select another Room in View Detail"
                    })
                } else {
                    notification.success({
                        message: 'Booking Successfull'
                    })
                }
            }
            
            if (!result.success) {
                if(result.data === "User not authenticated"){
                    notification.warning({
                        message: 'Login Required',
                        description: 'Please login to proceed with the booking.',
                    })
                    dispatch(toggleLogin())  
                }
              
            } 

        } catch (error) {
            console.log('error')
            console.error("Request failed:", error);
        }
    }

    roomBook()

}
