import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { TToken, TDecodedToken, TChildren } from '../models/common';
import { AuthResponse } from '../models/auth.response';
import { API_URL } from '../http/endpoints';
import { setUser } from '../store/reducers/user.reducer';

export type TAuthContext = {
  assignToken: (token: string) => void;
  refreshToken: () => void;
  isTokenExpired: boolean;
  removeToken: () => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
};

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export const AuthProvider = ({ children }: TChildren) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState<TToken>(localStorage.getItem('token'));
  const dispatch = useDispatch();

  const assignToken = useCallback((token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
    setIsAuth(true);
  }, []);

  const refreshToken = useCallback(async () => {
    try {
      const refreshResponse = await axios.get<AuthResponse>(
        `${API_URL}user/refresh`,
        {
          withCredentials: true,
        }
      );
      console.log('[REFRESH TOKEN] response: ', refreshResponse);
      assignToken(refreshResponse.data.accessToken);
      dispatch(setUser(refreshResponse.data.user));
      // eslint-disable-next-line
    } catch (err: any) {
      console.log(
        '[REFRESH TOKEN] catch error: ',
        err?.response?.data?.message
      );
    }
  }, [assignToken, dispatch]);

  const removeToken = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
  }, []);

  const getIsTokenExpired = useCallback(
    (token: TToken) => {
      if (!token) return true;
      try {
        const decodedToken: TDecodedToken = jwt_decode(token);
        const isTokenExpired =
          decodedToken.exp <= new Date().getTime() / 1000 ? true : false;
        return isTokenExpired;
      } catch (err) {
        removeToken();
        return true;
      }
    },
    [removeToken]
  );

  const isTokenExpired = useMemo(
    () => getIsTokenExpired(token),
    [getIsTokenExpired, token]
  );

  useEffect(() => {
    if (localStorage.getItem('token')) {
      refreshToken();
    }
  }, [refreshToken]);

  return (
    <AuthContext.Provider
      value={{
        assignToken,
        refreshToken,
        isTokenExpired,
        removeToken,
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
