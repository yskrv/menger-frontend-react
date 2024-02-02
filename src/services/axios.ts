import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://lively-gold-outerwear.cyclic.app'
});

export default axiosInstance;