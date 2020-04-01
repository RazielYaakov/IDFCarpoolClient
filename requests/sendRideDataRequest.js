import axios from 'axios';

const SERVER_URL = 'http://localhost:60';
const SEND_RIDE_DATA_API = 'findRide';

export default (phoneNumber, date, origin, destination) => 
    axios.post(`${SERVER_URL}/${SEND_RIDE_DATA_API}`, {
        phoneNumber,
        date,
        origin,
        destination
    });