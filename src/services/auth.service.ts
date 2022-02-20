import { AxiosResponse } from 'axios';
import axiosApi from '../http/axios.api';
import { AuthResponse } from '../models/auth.response';

const AuthService = () => {
  const signup = (
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> => {
    return axiosApi.post<AuthResponse>('user/signup', {
      email,
      password,
    });
  };

  const signin = async (
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> => {
    return axiosApi.post<AuthResponse>('user/signin', { email, password });
  };

  const logout = (): Promise<void> => {
    localStorage.removeItem('user');
    return axiosApi.post('user/logout');
  };

  return {
    signup,
    signin,
    logout,
  };
};

export default AuthService;
