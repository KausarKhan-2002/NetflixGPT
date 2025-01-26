import React, { useRef, useState } from "react";
import checkValidations from "../../Utils/checkValidations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import authentication from "../../Utils/authentication";
import { useDispatch } from "react-redux";

const Signed = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const phoneNumber = useRef(null);

  const handleForm = () => {
    const isValid = checkValidations(
      email.current,
      password.current,
      phoneNumber.current
    );
    setErrorMsg(isValid);

    if (isValid) return;

    authentication(
      isSignIn,
      name,
      email,
      password,
      phoneNumber,
      setErrorMsg,
      navigate,
      dispatch,
    );
  };

  return (
    <div>
      <img
        className="absolute w-full top-0 left-0 h-[100vh] object-cover brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_large.jpg"
      />

      <div className="min-h-screen flex items-center justify-center border-2">
        <div className="bg-black/55 relative px-14 py-20 rounded shadow-md w-[30%] text-white">
          <h2 className="text-3xl font-bold mb-5">
            {!isSignIn ? "Sign up" : "Sign In"}
          </h2>
          {!isSignIn && (
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                ref={name}
                className="block py-4 px-5 w-full bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Enter you name
              </label>
            </div>
          )}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              ref={email}
              className="block py-4 px-5 w-full bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Enter you email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              ref={password}
              className="block py-4 px-5 w-full bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Enter your password
            </label>
          </div>

          {!isSignIn && (
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                ref={phoneNumber}
                className="block py-4 px-5 w-full bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                maxLength="10"
                required
              />
              <label
                htmlFor="text"
                className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Enter your phone number
              </label>
            </div>
          )}

          <p className="text-red-500 text-sm font-medium mb-5">{errorMsg}</p>

          <button
            onClick={handleForm}
            className="w-full text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {!isSignIn ? "Sign up" : "Sign In"}
          </button>

          {/* <button className="text-center mt-4 block w-full text-sm text-slate-300">Forgot password?</button> */}

          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="flex gap-1 mt-6"
          >
            <span className="text-slate-400">
              {!isSignIn ? "Already registered?" : "New to Netflix?"}
            </span>
            <span className="font-medium">
              {!isSignIn ? "Sign in now." : "Sign up now."}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signed;
