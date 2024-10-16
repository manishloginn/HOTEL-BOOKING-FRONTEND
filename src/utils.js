import Endpoints from "./network/endpoints"
import request from "./network/request"

export const bookingSend = ({ roomId, formData }) => {
    // console.log(e.target.id)

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
        console.log(httpConfig)

        try {
            const result = await request(httpConfig)
            if (result.success) {

                if (result.data.status === 401) {
                    alert("login first")
                } else {
                    console.log("booking successfull")
                }
            } else {
                console.error("Error fetching hotel data:", result.data);
            }

        } catch (error) {
            console.error("Request failed:", error);
        }
        // console.log(httpConfig)
    }

    roomBook()

}
