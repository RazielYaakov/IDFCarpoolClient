import axios from 'axios'
import { SERVER_URL, ACCEPT_RIDE_API } from '../constants/constants';

export default (acceptRequest) =>
    axios.post(`${SERVER_URL}/${ACCEPT_RIDE_API}?` +
        `rideID=${acceptRequest.rideID}` +
        `&userType=${acceptRequest.userType}`
    ).then((data) => {
        if(data.data == 'Success') {
            //show accepted successfully alert
        } else {
            //show not accepted alert
        }
    }
    ).catch((err) => {
        console.log(err)
    });