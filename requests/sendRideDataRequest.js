import axios from 'axios';

import { FIND_RIDE_API, SERVER_URL } from '../constants/constants';

export default (findRideRequest) => {
  axios.post(`${SERVER_URL}/${FIND_RIDE_API}?` +
    `source=${findRideRequest.source}` +
    `&phoneNumber=${findRideRequest.phoneNumber}` +
    `&dateTime=${findRideRequest.date}` +
    `&destination=${findRideRequest.destination}` +
    `&homeToBase=${findRideRequest.homeToBase}`
  ).then((data) => {
    if (data.data.length != 0) {
      //show optional rides
    } else {
      //show no rides alert
    }
  }
  ).catch((err) => {
    console.log(err)
  });;
}