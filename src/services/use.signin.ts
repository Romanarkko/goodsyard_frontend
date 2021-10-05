import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth } from './auth.context';
import AuthService from './auth.service';
import { setUser } from '../store/reducers/user.reducer';

const UseSignin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authService = AuthService();
  const { assignToken } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMessage: '',
  });
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
    setError({
      isError: false,
      errorMessage: '',
    });

    try {
      const signinResponse = await authService.signin(email, password);
      console.log('[SIGN IN] response: ', signinResponse);
      if (!signinResponse.statusText.match(/^[23]\d{2}$/)) {
        assignToken(signinResponse.data.accessToken);
        dispatch(setUser(signinResponse.data.user));
        history.push('/dash');
      } else {
        throw new Error();
      }
      // eslint-disable-next-line
    } catch (err: any) {
      console.log('[SIGN IN] catch error: ', err);
      // prettier-ignore
      setError({
        isError: true,
        errorMessage: (err?.response?.data?.message || 'Something went wrong! Please try again.'),
      });
    }
  };

  return {
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
    email,
    password,
    submitted,
    error,
  };
};

export default UseSignin;
