import axios from 'axios'

const SERVER_URL = 'http://localhost:5000';
const SHOW_MY_RIDES_API = 'showmyriderequests';
var config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

export default (phone) =>
    console.log(axios.post(`${SERVER_URL}/${SHOW_MY_RIDES_API}`, { phoneNumber }, config));