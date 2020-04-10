import axios from 'axios';

import { SERVER_URL, SHOW_MY_RIDES_API } from '../constants/constants';

const showMyRidesRequest = async ({ phoneNumber }) => {
    var rides = await axios.get(`${SERVER_URL}/${SHOW_MY_RIDES_API}?phoneNumber=${phoneNumber}`);
    console.log(rides.data);
    return rides.data;
};

export default showMyRidesRequest;