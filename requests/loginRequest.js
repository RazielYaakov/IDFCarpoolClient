import axios from 'axios';

import { LOGIN_API, SERVER_URL } from '../constants/constants';

export default async (userData) => {
  console.log(userData);
  await axios.post(`${SERVER_URL}/${LOGIN_API}?` +
    `&phoneNumber=${userData.phoneNumber}` +
    `&name=${userData.name}` +
    `&token=${userData.token}`
  ).then((res) => {
    return res;
  }
  ).catch((err) => {
    console.log(err)
  });
}