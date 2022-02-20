import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth } from './auth.context';
import AuthService from './auth.service';
import { setUser } from '../store/reducers/user.reducer';

type TValues = {
  email: string;
  password: string;
};

const UseAuthentication = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authService = AuthService();
  const { assignToken } = useAuth();

  const handleSubmitSignin = async (values: TValues) => {
    try {
      const signinResponse = await authService.signin(
        values.email,
        values.password
      );
      console.log('[SIGN IN] response: ', signinResponse);
      if (!signinResponse.statusText.match(/^[23]\d{2}$/)) {
        assignToken(signinResponse.data.accessToken);
        dispatch(setUser(signinResponse.data.user));
        history.push('/dash');
      } else {
        throw new Error('Auth failed');
      }
    } catch (err) {
      console.log('[USE SIGN IN] catch error: ', err);
      throw err;
    }
  };

  return {
    handleSubmitSignin,
  };
};

export default UseAuthentication;
