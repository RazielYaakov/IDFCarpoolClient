import axios from 'axios'
import { SERVER_URL, DELETE_API } from '../constants/constants';

export default (phoneNumber) =>
    axios.post(`${SERVER_URL}/${DELETE_API}?phoneNumber=${phoneNumber}`);