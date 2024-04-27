import axios from 'axios';

const axiosInstance = () => {
  const options = {
    baseURL: 'https://radar-da-soja-backend.up.railway.app',
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
  };
    
  const instance = axios.create(options);

  instance.interceptors.response.use(response => {
    return response;
  }, error => {
    return Promise.reject(error);
  })

  return instance;
};

export default axiosInstance;