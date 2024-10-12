import Hotel from "./Hotel"
import './styles/index.scss'
let hotelsArr = [
    {
        "badgeIcon": "Company-Serviced",
        "name": "Super Collection O Bangalore Airport Road",
        "location": "New Airport Road, Bangalore",
        "rating": {
            "value": 4.4,
            "ratingsCount": 267,
            "description": "Very Good"
        },
        "amenities": [
            "Dining area",
            "Free Wifi",
            "Power backup",
            "Air conditioning",
            "Parking",
            "24-hour front desk",
            "Room service",
            "Laundry service",
            "Television",
            "Safety deposit box",
            "+ 1 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 711,
            "original": 2870,
            "discount": "69% off",
            "taxesAndFees": "₹167 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    },
    {
        "badgeIcon": "Company-Serviced",
        "name": "Luxury Inn Mumbai",
        "location": "Marine Drive, Mumbai",
        "rating": {
            "value": 4.5,
            "ratingsCount": 350,
            "description": "Excellent"
        },
        "amenities": [
            "Swimming pool",
            "Free Wifi",
            "Gym",
            "Spa",
            "Restaurant",
            "Airport shuttle",
            "Business center",
            "Parking",
            "Room service",
            "Laundry service",
            "+ 2 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 1500,
            "original": 5000,
            "discount": "70% off",
            "taxesAndFees": "₹200 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    },
    {
        "badgeIcon": "Company-Serviced",
        "name": "Comfort Stay Delhi",
        "location": "Connaught Place, Delhi",
        "rating": {
            "value": 4.2,
            "ratingsCount": 180,
            "description": "Very Good"
        },
        "amenities": [
            "Free Wifi",
            "Dining area",
            "Conference room",
            "Air conditioning",
            "Parking",
            "24-hour front desk",
            "Room service",
            "Laundry service",
            "Television",
            "Safety deposit box",
            "+ 1 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 950,
            "original": 3500,
            "discount": "73% off",
            "taxesAndFees": "₹150 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    },
    {
        "badgeIcon": "Company-Serviced",
        "name": "Budget Stay Chennai",
        "location": "Marina Beach, Chennai",
        "rating": {
            "value": 4.0,
            "ratingsCount": 120,
            "description": "Good"
        },
        "amenities": [
            "Free Wifi",
            "Dining area",
            "Power backup",
            "Air conditioning",
            "Parking",
            "24-hour front desk",
            "Room service",
            "Television",
            "Safety deposit box",
            "Children's play area",
            "+ 1 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 600,
            "original": 2000,
            "discount": "70% off",
            "taxesAndFees": "₹100 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    },
    {
        "badgeIcon": "Company-Serviced",
        "name": "Elegant Suites Kolkata",
        "location": "Park Street, Kolkata",
        "rating": {
            "value": 4.3,
            "ratingsCount": 300,
            "description": "Very Good"
        },
        "amenities": [
            "Free Wifi",
            "Dining area",
            "Spa",
            "Gym",
            "Parking",
            "24-hour front desk",
            "Room service",
            "Laundry service",
            "Television",
            "Safety deposit box",
            "+ 1 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 1200,
            "original": 4000,
            "discount": "70% off",
            "taxesAndFees": "₹180 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    },
    {
        "badgeIcon": "Company-Serviced",
        "name": "Heritage Hotel Jaipur",
        "location": "Hawa Mahal, Jaipur",
        "rating": {
            "value": 4.6,
            "ratingsCount": 220,
            "description": "Excellent"
        },
        "amenities": [
            "Free Wifi",
            "Dining area",
            "Swimming pool",
            "Gym",
            "Spa",
            "Parking",
            "24-hour front desk",
            "Room service",
            "Television",
            "Safety deposit box",
            "+ 2 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 1800,
            "original": 6000,
            "discount": "70% off",
            "taxesAndFees": "₹250 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    },
    {
        "badgeIcon": "Company-Serviced",
        "name": "Business Hotel Pune",
        "location": "MG Road, Pune",
        "rating": {
            "value": 4.1,
            "ratingsCount": 150,
            "description": "Very Good"
        },
        "amenities": [
            "Free Wifi",
            "Business center",
            "Conference room",
            "Air conditioning",
            "Parking",
            "24-hour front desk",
            "Room service",
            "Laundry service",
            "Television",
            "Safety deposit box",
            "+ 1 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 800,
            "original": 2800,
            "discount": "71% off",
            "taxesAndFees": "₹120 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    },
    {
        "badgeIcon": "Company-Serviced",
        "name": "Cozy Retreat Goa",
        "location": "Baga Beach, Goa",
        "rating": {
            "value": 4.7,
            "ratingsCount": 400,
            "description": "Excellent"
        },
        "amenities": [
            "Free Wifi",
            "Dining area",
            "Swimming pool",
            "Beach access",
            "Spa",
            "Gym",
            "Parking",
            "24-hour front desk",
            "Room service",
            "Laundry service",
            "+ 1 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 2000,
            "original": 7000,
            "discount": "71% off",
            "taxesAndFees": "₹300 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    },
    {
        "badgeIcon": "Company-Serviced",
        "name": "Mountain View Hotel Manali",
        "location": "Solang Valley, Manali",
        "rating": {
            "value": 4.8,
            "ratingsCount": 100,
            "description": "Excellent"
        },
        "amenities": [
            "Free Wifi",
            "Dining area",
            "Mountain view",
            "Spa",
            "Gym",
            "Parking",
            "24-hour front desk",
            "Room service",
            "Television",
            "Safety deposit box",
            "+ 1 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 2500,
            "original": 8000,
            "discount": "69% off",
            "taxesAndFees": "₹350 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    },
    {
        "badgeIcon": "Company-Serviced",
        "name": "Seaside Resort Kovalam",
        "location": "Kovalam Beach, Kerala",
        "rating": {
            "value": 4.5,
            "ratingsCount": 300,
            "description": "Excellent"
        },
        "amenities": [
            "Free Wifi",
            "Dining area",
            "Beach access",
            "Swimming pool",
            "Spa",
            "Parking",
            "24-hour front desk",
            "Room service",
            "Television",
            "Safety deposit box",
            "+ 1 more"
        ],
        "membership": "WIZARD MEMBER",
        "price": {
            "current": 2200,
            "original": 7500,
            "discount": "71% off",
            "taxesAndFees": "₹320 taxes & fees · per room per night"
        },
        "actions": {
            "viewDetails": true,
            "bookNow": true
        }
    }
]

const HotelsList = () => {
    return (
       
        <div className="hotel-list-wrraper">
            {
            hotelsArr.map((hotel) => {
                return <Hotel key={hotel.name} hotel={hotel} />
            })
        }
        </div>
    )
}

export default HotelsList