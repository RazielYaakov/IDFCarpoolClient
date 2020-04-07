import axios from 'axios';

import { FIND_RIDE_API, SERVER_URL } from '../constants/constants';

const findRideRequest = async (wantedRideData) => {
  axios.post(`${SERVER_URL}/${FIND_RIDE_API}?` +
    `source=${wantedRideData.source}` +
    `&phoneNumber=${wantedRideData.phoneNumber}` +
    `&dateTime=${wantedRideData.date}` +
    `&destination=${wantedRideData.destination}`
  ).then((data) => {
    return data.data;
  }
  ).catch((err) => {
    console.log(err)
  });;
}

export default findRideRequest;