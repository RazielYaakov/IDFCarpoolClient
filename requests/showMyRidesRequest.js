import axios from 'axios';

import { SERVER_URL, SHOW_MY_RIDES_API } from '../constants/constants';

export default (userType, phoneNumber) => {
    axios.get(`${SERVER_URL}/${SHOW_MY_RIDES_API}?userType=${userType}&phoneNumber=${phoneNumber}`)
        .then((data) => {
            if (data.data.length != 0) {
                //has rides to show
            } else {
                //no rides to show
            }
        }).catch((err) => {
            console.log(err)
        });
};