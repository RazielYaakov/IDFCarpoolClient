import axios from 'axios';
import { SERVER_URL, FIND_RIDE_API } from '../constants/constants';

export default (findRideRequest) => {
  axios.post(`${SERVER_URL}/${FIND_RIDE_API}?
  source=${findRideRequest.source}
  &phoneNumber=${findRideRequest.phoneNumber}
  &dateTime=${findRideRequest.date}
  &destination=${findRideRequest.destination}
  &homeToBase=${findRideRequest.homeToBase}
  `);
}