import axios from 'axios';
import { API_URL } from './endpoints';
import { useAuth } from '../services/auth.context';

const axiosApi = axios.create({
  withCredentials: true, // auto adding cookies
  baseURL: API_URL,
});

axiosApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

axiosApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error._isRetry) {
      originalRequest._isRetry = true;
      try {
        const { refreshToken } = useAuth();
        await refreshToken();
        return axiosApi.request(originalRequest);
      } catch (err) {
        console.log('Not authorized');
      }
    }
    throw error;
  }
);

export default axiosApi;
