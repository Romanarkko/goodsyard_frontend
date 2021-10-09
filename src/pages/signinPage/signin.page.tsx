import React from 'react';
import 'tailwindcss/tailwind.css';
import styles from './signin.page.module.css';
import { useFormik } from 'formik';
import validationSchema from '../../services/validation.schema';
import UseAuthentication from '../../services/use.authentication';

const SigninPage = () => {
  const { handleSubmitSignin } = UseAuthentication();

  const { handleSubmit, handleChange, values, touched, errors, setErrors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema,

      onSubmit: async (values) => {
        try {
          await handleSubmitSignin(values);
          // eslint-disable-next-line
        } catch (err: any) {
          // prettier-ignore
          setErrors({ 
              password: (err?.response?.data?.message || 'Something went wrong! Please try again.'), 
            });
        }
      },
    });

  return (
    <>
      <div className={`${styles.container} min-w-min`}>
        <div className="signinPage">
          <header>
            <h2 className={styles.textStroke}>
              Goods<span className="font-bold">Yard</span>
            </h2>
          </header>
          <main className="signinMain">
            <div className="signinTagLine text-stroke">
              Get Your goods in order
            </div>
            <div className={`${styles.form} signinForm`}>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.input}
                  onChange={handleChange}
                  value={values.email}
                ></input>
                {touched.email && errors.email && (
                  <div className={styles.inputError}>{errors.email}</div>
                )}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={styles.input}
                  onChange={handleChange}
                  value={values.password}
                ></input>
                {touched.password && errors.password && (
                  <div className={styles.inputError}>{errors.password}</div>
                )}
                <div className="flex items-center justify-between">
                  <button type="submit" className="signinSubmitBtn">
                    Sign&nbsp;in
                  </button>
                  <a href={' '} className="signinBtn">
                    Forgot your password?
                  </a>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
