import axios from 'axios';
import moment from 'moment';

import { NEW_RIDE_OFFER_API, SERVER_URL } from '../constants/constants';

export default async (userData) => {
    const dateStr = moment(userData.dateTime).format('YYYY-MM-DD HH:mm:ss')
    const permanentStr = userData.isPermanent ? 'True' : 'False';

    let newOfferResponse = await axios.post(`${SERVER_URL}/${NEW_RIDE_OFFER_API}?` +
    `source=${userData.source}` +
    `&destination=${userData.destination}` +
    `&phoneNumber=${userData.phoneNumber}` +
    `&name=${userData.name}` +
    `&isPermanent=${permanentStr}` +
    `&dateTime=${dateStr}`, null, { timeout: 15000 });

  console.log(newOfferResponse.data);

  return newOfferResponse.data;
}