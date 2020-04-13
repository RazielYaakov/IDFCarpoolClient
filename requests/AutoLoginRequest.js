import axios from 'axios';

import { AUTO_LOGIN_API, SERVER_URL } from '../constants/constants';

export default async (phoneNumber) => {
  let autoLoginResponse = await axios.post(`${SERVER_URL}/${AUTO_LOGIN_API}?` +
    `&phoneNumber=${phoneNumber}`, null, { timeout: 10000 });

  return autoLoginResponse.data;
}