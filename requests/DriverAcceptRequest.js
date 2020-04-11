import axios from 'axios';

import { SERVER_URL, DRIVER_ACCEPT_REQUEST_API } from '../constants/constants';

const DriverAcceptRequest = async ({ requestID }) => {
    var rides = await axios.post(`${SERVER_URL}/${DRIVER_ACCEPT_REQUEST_API}?` + 
    `requestID=${requestID}`, null, { timeout: 10000 });

    return rides.data;
};

export default DriverAcceptRequest;