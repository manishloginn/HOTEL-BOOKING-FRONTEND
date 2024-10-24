const baseUrl = "http://localhost:5000";

// TODO: add REST endpoints int this
const Endpoints = {
    hotelData : `${baseUrl}/hotelData`,
    fetchSelectedHotel: `${baseUrl}/hotelselect`,
    bookRoom: `${baseUrl}/bookRoom`,
    fetchRoom: `${baseUrl}/hotelRooms`,
    userLogin: `${baseUrl}/userLogin`,
    userRegister: `${baseUrl}/userRegister`
};

export default Endpoints;
