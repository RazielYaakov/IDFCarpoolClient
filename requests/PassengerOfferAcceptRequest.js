import axios from 'axios';

import { SERVER_URL, PASSENGER_ACCEPT_OFFER_API } from '../constants/constants';

const passengerOfferAcceptRequest = async ({ phoneNumber, offerID }) => {
    var rides = await axios.post(`${SERVER_URL}/${PASSENGER_ACCEPT_OFFER_API}?` + 
    `phoneNumber=${phoneNumber}` +
    `&offerID=${offerID}`, null, { timeout: 10000 });

    return rides.data;
};

export default passengerOfferAcceptRequest;