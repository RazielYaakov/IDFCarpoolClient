import axios from 'axios';

import { SERVER_URL, CANCEL_REQUEST_API } from '../constants/constants';

const CancelRequest = async ({ requestID, phoneNumber }) => {
    var rides = await axios.post(`${SERVER_URL}/${CANCEL_REQUEST_API}?` +
        `requestID=${requestID}` +
        `&phoneNumber=${phoneNumber}`, null, { timeout: 10000 });

    console.log(rides);
    return rides.data;
};

export default CancelRequest;