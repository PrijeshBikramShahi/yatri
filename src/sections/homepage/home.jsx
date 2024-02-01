import { signOut } from "firebase/auth";
import React from "react";
import HeroPage from "../../components/hero_section/hero";
import NavBar from "../../components/navbar/navbar";
import SeasonHigh from "../seasonhigh/inspired";
import TripSec from "../plantrippage/trip";
import AboutSec from "../aboutpage/about";
import WeatherSec from "../weather/weather";
import { useRef } from "react";
import Test from "./test";

const HomePage = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const myRef = useRef(null);
  return (
    <div className="flex-wrap">
      <div ref={myRef} className="bg-[url('/src/assets/bg2.jpeg')] bg-cover ">
        <NavBar handleClick={handleClick} handleClick2={handleClick2} />
        <HeroPage />
      </div>
      <div className="highSec">
        <SeasonHigh iRef={ref2} />
      </div>
      <div className="planTrip">
        <TripSec />
      </div>
      <div className="weatherSec">
        <WeatherSec wRef={ref} />
      </div>
      <div className="dashboardPage">
        <AboutSec />
      </div>
    </div>
  );
};
export default HomePage;
