import axios from 'axios'

const SERVER_URL = 'http://localhost:5000';
const ACCEPT_RIDE_API = 'acceptride';
var config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

export default (rideId) =>
    console.log(axios.post(`${SERVER_URL}/${ACCEPT_RIDE_API}`, { rideId }, config));