import axios from 'axios';
import moment from 'moment';

import { FIND_RIDE_API, SERVER_URL } from '../constants/constants';

export default async (userData) => {
    const dateStr = moment(userData.dateTime).format('YYYY-MM-DD HH:mm:ss')
    
    let findRideResponse = await axios.post(`${SERVER_URL}/${FIND_RIDE_API}?` +
    `&source=${userData.source}` +
    `&destination=${userData.destination}` +
    `&phoneNumber=${userData.phoneNumber}` +
    `&dateTime=${dateStr}`
  );

  return findRideResponse.data;
};