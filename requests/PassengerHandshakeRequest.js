import axios from 'axios';

import { SERVER_URL, RIDE_HANDSHAKE_API } from '../constants/constants';

const PassengerHandshakeRequest = async ({ requestID }) => {
    var rides = await axios.post(`${SERVER_URL}/${RIDE_HANDSHAKE_API}?` + 
    `requestID=${requestID}`, null, { timeout: 10000 });

    return rides.data;
};

export default PassengerHandshakeRequest;