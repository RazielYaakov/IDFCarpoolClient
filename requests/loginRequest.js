import axios from 'axios';

import { LOGIN_API, SERVER_URL } from '../constants/constants';

export default (userData) => {
  axios.post(`${SERVER_URL}/${LOGIN_API}?` +
    `userType=${userData.userType}` +
    `&phoneNumber=${userData.phoneNumber}` +
    `&name=${userData.name}` +
    `&leavingHomeTime=${userData.leavingHomeTime}` +
    `&leavingBaseTime=${userData.leavingBaseTime}` +
    `&baseLocation=${userData.baseLocation}` +
    `&homeLocation=${userData.homeLocation}` +
    `&token=${userData.token}`
  ).then((data) => {
    if (data.data == 'Success') {
      //change to search page
    } else {
      //show problem alert and try again to login
    }
  }
  ).catch((err) => {
    console.log(err)
  });
}