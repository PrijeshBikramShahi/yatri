import { React, useEffect } from "react";
import HomePage from "./sections/homepage/home";
import LoginUI from "./sections/auth/login1";
import SignUp from "./sections/auth/signup1";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
export default function App() {
  useEffect(() => {
    VANTA.BIRDS({
      el: "#test",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      birdSize: 1.9,
      wingSpan: 20.0,
      speedLimit: 4.0,
      separation: 54.0,
      alignment: 6.0,
      cohesion: 1.0,
      quantity: 0.4,
      backgroundAlpha: 0.0,
    });
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<LoginUI />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
