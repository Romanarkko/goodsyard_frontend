import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('E-mail is not valid')
    .max(32, 'Email should not be longer than 32 characters')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must be longer than 6 characters')
    // ToDo undo comments later
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/,
    //   'Password must contain: numbers, both case letters, and special symbol'
    // )
    .max(32, 'Password should not be longer than 32 characters')
    .required('Password is required'),
});

export default validationSchema;
