import axios from 'axios'

const SERVER_URL = 'http://localhost:5000';
const UPDATE_USER_API = 'updateuser';
var config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

export default (userUpdatedData) =>
    console.log(axios.post(`${SERVER_URL}/${UPDATE_USER_API}`, { userUpdatedData }, config));