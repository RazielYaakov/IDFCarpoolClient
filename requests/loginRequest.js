import axios from 'axios';
import { SERVER_URL, LOGIN_API } from '../constants/constants';

export default (userData) => {
    axios.post(`${SERVER_URL}/${LOGIN_API}?
        userType=${userData.userType}
        &phoneNumber=${userData.phoneNumber}
        &name=${userData.name}
        &leavingHomeTime=${userData.leavingHomeTime}
        &leavingBaseTime=${userData.leavingBaseTime}
        &baseLocation=${userData.baseLocation}
        &homeLocation=${userData.homeLocation}
        &token=${userData.token}
    `);
}