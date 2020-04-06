import axios from 'axios';

import { SERVER_URL, SHOW_MY_RIDES_API } from '../constants/constants';

const showMyRidesRequest = async ({ phoneNumber, userType }) => {
    var rides = await axios.get(`${SERVER_URL}/${SHOW_MY_RIDES_API}?userType=${userType}&phoneNumber=${phoneNumber}`);

    return rides.data;
};

export default showMyRidesRequest;