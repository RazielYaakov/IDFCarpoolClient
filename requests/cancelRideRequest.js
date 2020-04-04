import axios from 'axios'
import { SERVER_URL, CANCEL_RIDE_API } from '../constants/constants';

export default (rideID) =>
    axios.post(`${SERVER_URL}/${CANCEL_RIDE_API}?` +
        `rideID=${acceptRequest.rideID}`
    ).then((data) => {
        if(data.data == 'Success') {
            //show deleted successfully alert
        } else {
            //show not deleted alert
        }
    }
    ).catch((err) => {
        console.log(err)
    });