import axios from 'axios'
import { SERVER_URL, DELETE_API } from '../constants/constants';

export default (phoneNumber) =>
    axios.post(`${SERVER_URL}/${DELETE_API}?phoneNumber=${phoneNumber}`)
    .then((data) => {
        if(data.data == 'Success') {
            //show user deleted successfully alert
        } else {
            //show user wasn't deleted alert
        }
    }
    ).catch((err) => {
        console.log(err)
    });