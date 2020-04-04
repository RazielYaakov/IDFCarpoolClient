import axios from 'axios'
import {SERVER_URL, ACCEPT_RIDE_API} from '../constants/constants';

export default (acceptRequest) =>
    console.log(axios.post(`${SERVER_URL}/${ACCEPT_RIDE_API}?
    rideID=${acceptRequest.rideID}
    &userType=${acceptRequest.userType}
    `));