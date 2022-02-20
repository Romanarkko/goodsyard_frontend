import { Redirect, Route } from 'react-router';
import { useAuth } from './auth.context';
import { TRouteProps } from '../models/common';

export const ProtectedRoute = ({ children, ...rest }: TRouteProps) => {
  const { isTokenExpired, isAuth } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth && !isTokenExpired ? (
          children
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: location } }} />
        )
      }
    />
  );
};

export const RedirectRoute = ({ pathname, children, ...rest }: TRouteProps) => {
  const { isAuth, isTokenExpired } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isAuth || isTokenExpired) return children;
        if (isAuth && !isTokenExpired)
          return <Redirect to={{ pathname, state: { from: location } }} />;
        return children;
      }}
    />
  );
};
