import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://lively-gold-outerwear.cyclic.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;