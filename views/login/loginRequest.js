import axios from 'axios'

const SERVER_URL = 'http://localhost:5000';
const CREATE_USER_API = 'createuser';
var config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

export default (userData) =>
    console.log(axios.post(`${SERVER_URL}/${ACCEPT_RIDE_API}`, { userData }, config));