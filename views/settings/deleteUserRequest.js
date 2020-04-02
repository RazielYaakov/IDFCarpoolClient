import axios from 'axios'

const SERVER_URL = 'http://localhost:5000';
const DELETE_USER_API = 'deleteuser';
var config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

export default (userId) =>
    console.log(axios.post(`${SERVER_URL}/${DELETE_USER_API}`, { userId }, config));