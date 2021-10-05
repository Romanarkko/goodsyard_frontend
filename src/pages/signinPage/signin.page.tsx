import React from 'react';
import 'tailwindcss/tailwind.css';
import './signin.page.css';
import UseSignin from '../../services/use.signin';

const SigninPage = () => {
  const useSignin = UseSignin();

  return (
    <>
      <div className="signinPageContainer min-w-min">
        <div className="signinPage text-gyBlack font-montserrat py-7 px-28 max-w-screen-2xl mx-auto  h-full">
          <header>
            <h2 className="HeadLogo text-6xl text-stroke">
              Goods<span className="font-bold">Yard</span>
            </h2>
          </header>
          <main className="mt-32 grid md:grid-cols-3 md:gap-x-28">
            <div className="signinPage_tagline col-span-1 invisible md:visible text-4xl xl:text-6xl text-gyBlack font-bold text-stroke">
              Get Your goods in order
            </div>
            <div className="signinPage_form col-span-3 md:col-span-2 text-base xl:text-lg bg-gyBlack bg-opacity-70 rounded-3xl pt-12 pb-10 px-12 xl:px-28 font-heebo">
              <form onSubmit={useSignin.handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="signinPageInput"
                  onChange={useSignin.handleChangeEmail}
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="signinPageInput"
                  onChange={useSignin.handleChangePassword}
                ></input>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="py-5 px-12 bg-gyGreen rounded-3xl text-2xl text-gyBlack"
                  >
                    Sign&nbsp;in
                  </button>
                  <button className="text-base lg:text-xl text-gyLightGray ml-3">
                    Forgot your password?
                  </button>
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
