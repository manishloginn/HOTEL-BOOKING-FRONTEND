import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import BrunchDiningOutlinedIcon from '@mui/icons-material/BrunchDiningOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import RowingOutlinedIcon from '@mui/icons-material/RowingOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import PhishingOutlinedIcon from '@mui/icons-material/PhishingOutlined';



const getAmenity = (amenity) => {
    switch (amenity) {
        case "Free Wi-Fi":
            return < WifiOutlinedIcon style={{ color: "grey" }} />;

        case "Wi-Fi":
            return < WifiOutlinedIcon style={{ color: "grey" }} />;

        case "Gym":
            return < FitnessCenterOutlinedIcon style={{ color: "grey" }} />;

        case "Free Breakfast":
            return < BrunchDiningOutlinedIcon style={{ color: "grey" }} />;

        case "Conference Rooms":
            return < VideocamOutlinedIcon style={{ color: "grey" }} />;


        case "Swimming Pool":
            return < PoolOutlinedIcon style={{ color: "grey" }} />;

        case "Spa":
            return < AirlineSeatIndividualSuiteOutlinedIcon style={{ color: "grey" }} />;

        case "Bar":
            return < LocalBarOutlinedIcon style={{ color: "grey" }} />;

        case "Airport Shuttle":
            return < AirportShuttleOutlinedIcon style={{ color: "grey" }} />;

        case "Pool":
            return < PoolOutlinedIcon style={{ color: "grey" }} />;


        case "Fine Dining":
            return < BrunchDiningOutlinedIcon style={{ color: "grey" }} />;


        case "Valet Parking":
            return < LocalParkingOutlinedIcon style={{ color: "grey" }} />;


        case "Nature Trails":
            return < ForestOutlinedIcon style={{ color: "grey" }} />;


        case "Picnic Areas":
            return < CategoryOutlinedIcon style={{ color: "grey" }} />;


        case "Yoga Classes":
            return < SelfImprovementOutlinedIcon style={{ color: "grey" }} />;

        case "Outdoor Activities":
            return < RowingOutlinedIcon style={{ color: "grey" }} />;


        case "Hiking Trails":
            return < HikingOutlinedIcon style={{ color: "grey" }} />;


        case "Kayaking":
            return < SailingOutlinedIcon style={{ color: "grey" }} />;




        case "Fishing":
            return < PhishingOutlinedIcon style={{ color: "grey" }} />;







        default:
            return null;

    }
}

export default getAmenity