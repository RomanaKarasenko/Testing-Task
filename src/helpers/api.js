import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://66bc769424da2de7ff6aa3b2.mockapi.io',
  });
  
  export const fetchCampers = async () => {
    const { data } = await instance.get(`/adverts`);
  
    return data;
  };