import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/';
const SEND_RIDE_DATA_API = 'findride';

export default (phoneNumber, date, source, destination) =>
    axios.post(`${SERVER_URL}/${SEND_RIDE_DATA_API}?source=a&phoneNumber=1&dateTime=2020-04-02T04:37:36.127Z&destination=b&homeToBase=True`, {
      phoneNumber,
      DateTime: date,
      source,
      destination,
      homeToBase: false,
    });