import axios from 'axios'
import { SERVER_URL, UPDATE_API } from '../constants/constants';

export default (userUpdatedData) => {
    axios.post(`${SERVER_URL}/${UPDATE_API}?` +
    `userType=${userUpdatedData.userType}` +
    `&phoneNumber=${userUpdatedData.phoneNumber}` +
    `&name=${userUpdatedData.name}` +
    `&leavingHomeTime=${userUpdatedData.leavingHomeTime}` +
    `&leavingBaseTime=${userUpdatedData.leavingBaseTime}` +
    `&baseLocation=${userUpdatedData.baseLocation}` +
    `&homeLocation=${userUpdatedData.homeLocation}` +
    `&token=${userUpdatedData.token}`
  ).then((data) => {
    if(data.data == 'Success'){
        //Updated successfully alert
    } else {
        //show problem alert
    }
  }
  ).catch((err) => {
    console.log(err)
  });
}