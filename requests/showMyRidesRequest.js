import axios from 'axios'
import { SERVER_URL, SHOW_MY_RIDES_API } from '../constants/constants';

export default (userType, phoneNumber) =>
    axios.get(`${SERVER_URL}/${SHOW_MY_RIDES_API}?userType=${userType}&phoneNumber=${phoneNumber}`).
        then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });