import axios from 'axios'
import {SERVER_URL, CANCEL_RIDE_API} from '../constants/constants';

export default (rideID) =>
    axios.post(`${SERVER_URL}/${CANCEL_RIDE_API}?rideID=${rideID}`);