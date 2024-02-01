import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const AboutSec = () => {
  return (
    <div className="h-screen ">
      <div className="aboutSec h-[100%] bg-cover bg-[url('/src/assets/about2.png')] flex flex-col justify-end">
        <div
          className="textArea  w-[60%] h-[50%] text-white "
          style={{ fontFamily: "unset" }}
        >
          <div className="desc w-[55%] mt-0 h-[30%] ml-[25%] flex-col flex justify-center">
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="700"
              className="text-[1.4rem] font-light"
            >
              With each visit, you contribute to the ongoing story of
              conservation, ensuring the magic of{" "}
              <span className="font-bold text-[1.6rem] text-orange-400">
                {" "}
                Nepal
              </span>{" "}
              endures for generations to come.
            </p>
          </div>
          <div className="data h-[55%] ml-[25%] flex justify-center">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
              className="one w-[25%] flex flex-col my-auto"
            >
              <h1 className="mb-4 text-[4rem] font-semibold">836</h1>
              <h2 className="w-[6rem]">Daily Guided Visits</h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
              className="two w-[25%] flex flex-col my-auto"
            >
              <h1 className="mb-4 text-[4rem] font-semibold">
                98<span className=" font-light text-[2.2rem]">%</span>
              </h1>
              <h2 className="w-[6rem]">Visitor Satisfied</h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
              className="three w-[25%] flex flex-col my-auto"
            >
              <h1 className="mb-4 text-[4rem] font-semibold">
                70<span className=" font-light text-[2.2rem]">+</span>
              </h1>
              <h2 className="w-[6rem]">Biodiversity Species</h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
              className="four w-[25%] flex flex-col my-auto"
            >
              <h1 className="mb-4 text-[4rem] font-semibold">
                158<span className=" font-light text-[2.2rem]">k</span>
              </h1>
              <h2 className="w-[6rem]">Community Followers</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
