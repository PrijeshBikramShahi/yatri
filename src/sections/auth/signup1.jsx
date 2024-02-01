import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import LoginUI from "./login1";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage + " with error code: " + errorCode);
      });
  };
  return (
    <div className="">
      <div
        className="signupScreen h-screen w-screen flex bg-cover bg-[url('/src/assets/cloud2.jpeg')]"
        id="test"
      >
        <div className="loginSection w-[55%] h-screen max-h-[100%] flex flex-col justify-between">
          <div className="logo mt-[5%] mx-auto h-12 w-24 bg-cover bg-[url('/src/assets/logo_light.png')]"></div>

          <form
            action=""
            className="loginContainer mb-[14%] flex flex-col justify-between mx-auto h-[45%] w-[60%] text-white"
          >
            <div
              aos-data="zoom-in"
              aos-data-delay="200"
              aos-data-duration="700"
              className="titleSec flex flex-col mb-10"
            >
              <h1
                className="greet mx-auto text-[3.6rem] font-light  "
                style={{ fontFamily: "revert-layer" }}
              >
                Register Now
              </h1>
              <h4 className="subtitle mx-auto font-thin text-[1.2rem]">
                Enter your credentials to create an account
              </h4>
            </div>

            <div
              aos-data="zoom-in"
              aos-data-delay="200"
              aos-data-duration="700"
              className=" flex flex-col items-center"
            >
              <div className="creds w-[90%] flex flex-col">
                <div className="usernameSec flex flex-col mb-2">
                  <label
                    className="block text-lg font-thin mr-auto mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="bg-white bg-opacity-30 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div
                  aos-data="zoom-in"
                  aos-data-delay="200"
                  aos-data-duration="700"
                  className="emailSec flex flex-col mb-2"
                >
                  <label
                    className="block text-lg font-thin mr-auto mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="bg-white bg-opacity-30 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div
                  aos-data="zoom-in"
                  aos-data-delay="200"
                  aos-data-duration="700"
                  className="passSec flex flex-col mt-0"
                >
                  <label
                    className="block text-lg font-thin mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="bg-white bg-opacity-30 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div
                  aos-data="zoom-in"
                  aos-data-delay="200"
                  aos-data-duration="700"
                  className="bottom flex flex-col mt-12"
                >
                  <button
                    className="bg-blue-500 flex mx-auto w-[90%] text-white font-bold py-2 px-4 rounded-xl mb-[2%]"
                    type="button"
                    onClick={handleSignup}
                  >
                    <Link className="mx-auto" to="/login">
                      <h1 className="">Sign Up</h1>
                    </Link>
                  </button>
                </div>
                <div className="google flex justify-center mt-[2%]">
                  Sign Up with Google
                </div>
              </div>
            </div>
          </form>

          <div
            aos-data="zoom-in"
            aos-data-delay="200"
            aos-data-duration="700"
            className="signUpText mx-auto mb-[8%] font-light text-white"
          >
            Already have an account?{" "}
            <Link to="/login">
              <span className="signUpButton font-bold"> Log In</span>
            </Link>
          </div>
        </div>
        <div
          aos-data="zoom-in"
          aos-data-delay="200"
          aos-data-duration="700"
          className="imageSection w-[45%] h-[100%] flex"
        >
          <div className="imgTile h-[97%] w-[97%] bg-cover bg-[url('/src/assets/login_tile2.jpeg')] mr-[2%] my-auto rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
