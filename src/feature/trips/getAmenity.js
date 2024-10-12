import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import BrunchDiningOutlinedIcon from '@mui/icons-material/BrunchDiningOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';


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
    
            default:
                return null;

    }
}

export default getAmenity