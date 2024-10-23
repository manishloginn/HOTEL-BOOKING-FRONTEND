import Endpoints from "./network/endpoints"
import request from "./network/request"
import { toggleLogin } from "./feature/search/slice"



export const bookingSend = ({ roomId, formData, dispatch }) => {


    if (!roomId) {
        return alert('please select room first')
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
                    alert('please login')
                    dispatch(toggleLogin())
                } else {
                    console.log("booking successfull")
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
