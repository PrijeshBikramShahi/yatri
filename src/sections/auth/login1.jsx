// import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

AOS.init();

const LoginUI = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = async (e) => {
    setIsLoggedIn(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="loginScreen h-screen w-screen flex bg-cover bg-[url('/src/assets/cloud2.jpeg')]">
        <div
          className="imageSection w-[45%] h-[100%] flex"
          aos-data="zoom-in"
          aos-data-delay="200"
          aos-data-duration="700"
        >
          <div className="imgTile h-[97%] w-[97%] bg-cover bg-[url('/src/assets/login_tile2.jpeg')] ml-[2%] my-auto rounded-2xl"></div>
        </div>
        <div className="loginSection w-[55%] h-screen max-h-[100%] flex flex-col justify-between">
          <div className="logo mt-[5%] mx-auto h-12 w-24 bg-cover bg-[url('/src/assets/logo_light.png')]"></div>

          <form
            action=""
            className="loginContainer mb-[14%] flex flex-col justify-between mx-auto h-[45%] w-[60%] text-white"
          >
            <div className="titleSec flex flex-col mb-10">
              <h1
                className="greet mx-auto text-[3.6rem] font-light  "
                style={{ fontFamily: "revert-layer" }}
              >
                Welcome Back
              </h1>
              <h4 className="subtitle mx-auto font-thin text-[1.2rem]">
                Enter your email and password to enter your account
              </h4>
            </div>
            <div className=" flex flex-col items-center">
              <div className="creds w-[90%] flex flex-col">
                <div className="emailSec flex flex-col mb-2">
                  <label
                    className="block text-lg font-thin mr-auto mb-2"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className=" bg-white bg-opacity-30 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="passSec flex flex-col mt-4">
                  <label
                    className="block text-lg font-thin mb-2 "
                    htmlFor="password"
                  >
                    Password:
                  </label>
                  {/* <i>
                    <FontAwesomeIcon icon={"eye"} />
                  </i> */}
                  <input
                    className="bg-white bg-opacity-30 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="remember flex w-[90%] justify-between mt-4">
                <div className="checkBox flex gap-2">
                  <input className="" type={"radio"} style={{}}></input>
                  <h1>Remember Me</h1>
                </div>
                <div className="forgotPass">Forgot Password</div>
              </div>
            </div>
            <div className="bottom flex flex-col mt-12">
              <button
                className="bg-blue-500 flex mx-auto w-[90%] text-white font-bold py-2 px-4 rounded-xl mb-[2%]"
                type="button"
                onClick={handleLogin}
              >
                <Link className="mx-auto" to="/home">
                  <h1 className="">Login</h1>
                </Link>
              </button>
              <div className="google mx-auto mt-[2%] font-light">
                Sign in with{" "}
                <span className="signUpButton font-bold"> Google</span>
              </div>
            </div>
          </form>

          <div className="signUpText mx-auto mb-[8%] font-light text-white">
            Don't have an account?{" "}
            <Link to="/">
              <span className="signUpButton font-bold"> Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
