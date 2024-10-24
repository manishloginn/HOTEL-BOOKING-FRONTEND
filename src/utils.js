import Endpoints from "./network/endpoints"
import request from "./network/request"
import { toggleLogin } from "./feature/search/slice"
import { notification } from "antd"
import { useParams } from "react-router-dom"





export const bookingSend = ({hotelId,  roomId, formData, dispatch }) => {

    

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
                hotelId:hotelId,
                roomId: roomId,
                startDate: formData.checkindate,
                endDate: formData.checkoutdate,
                guest: formData.guest
            }
        }

        try {
            const result = await request(httpConfig)
            console.log(result)
            if (result.success) {
                if (result.data.status === 401) {
                    notification.warning({
                        message: 'Login Required',
                        description: 'Please login to proceed with the booking.',
                    })

                } else if(result.data.status === 400 ){
                    notification.warning({
                        message:"Room Allreaddy booked in this Date",
                        description:"Select another Room in View Detail"
                    })
                }
                
                else {
                    notification.success({
                        message:'Booking Successfull'
                    })
                }
            } else {
                console.error("Error fetching hotel data:", result.data);
                dispatch(toggleLogin())
            }

        } catch (error) {
            console.error("Request failed:", error);
        }
    }

    roomBook()

}
