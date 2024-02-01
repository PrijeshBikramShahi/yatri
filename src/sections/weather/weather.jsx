import { faCloud, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const WeatherSec = ({ wRef }) => {
  return (
    <div ref={wRef}>
      <div
        className="weatherSec h-screen w-screen bg-cover bg-[url('/src/assets/cloud2.png')] flex gap-32"
        style={{ fontFamily: "unset" }}
      >
        <div className="locationSec w-[30%] my-auto">
          <h1 data-aos="fade-right" data-aos-delay="200" data-aos-duration="800" className="text-white text-[8vh] ml-32 font-semibold">Pokhara</h1>
        </div>
        <div className="locationSec w-[70%] my-auto text-white">
          <FontAwesomeIcon data-aos="fade-down" data-aos-delay="200" data-aos-duration="800" className=" size-[28vh]" inverse icon={faCloudSun} />
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="800" className="weatherInfo">
            <h2 className="day text-[5vh]">Tue,Jan 29</h2>
            <h2 className="temp text-[3vh]">21° / 25°</h2>
          </div>
          <div className="weatherDesc text-[1.5rem] pt-5">
            <p data-aos="fade-down" data-aos-delay="200" data-aos-duration="800" className=" pb-4">Humid and mostly cloudy throughout the day.</p>
            <hr data-aos="fade-right" data-aos-delay="200" data-aos-duration="800" className="w-[80%]" />
            <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="800" className=" pt-4">
              Light rain throughout the week, with high temperatures falling to
              23°C on Friday.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSec;
