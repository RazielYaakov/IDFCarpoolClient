import axios from 'axios';

import { LOGIN_API, SERVER_URL } from '../constants/constants';

export default async (userData) => {
  let loginResponse = await axios.post(`${SERVER_URL}/${LOGIN_API}?` +
    `&phoneNumber=${userData.phoneNumber}` +
    `&name=${userData.name}` +
    `&token=${userData.token}`, null, { timeout: 10000 });

  console.log(loginResponse.data);
  return loginResponse.data;
}