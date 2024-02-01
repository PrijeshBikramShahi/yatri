import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const TripSec = () => {
  return (
    // <div className="h-screen">
    <div className=" h-[200vh] bg-[url('/src/assets/black_bg.jpeg')]">
      <div className="tripSec h-[200vh] w-screen">
        <div className="upperSec flex justify-center items-center h-[33%]">
          <div className="tripTitle w-[50%]">
            <h2
              data-aos="fade-right"
              className="text-white text-5xl w-[60%] font-bold pb-10 leading-[4rem]"
              style={{ fontFamily: "unset" }}
            >
              Discover Captivating{" "}
              <span className="text-orange-400"> Wildlife</span>
            </h2>
            <p
              data-aos="fade-up"
              className="w-[75%] text-white text-[1.3rem] leading-[1.9rem]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex
              culpa, commodi modi iure maxime eligendi recusandae, cumque est
              repudiandae quas, velit corporis eaque tempora fuga debitis
              accusamus! Neque, ipsam.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.2 }} className="tripImg">
            <img src="/src/assets/bear_circle.png" alt="" />
          </motion.div>
        </div>
        <div className="upperSec flex justify-center items-center h-[33%]">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="tripImg w-[50%] ml-[20vh]"
          >
            <img src="/src/assets/mom.png" alt="" />
          </motion.div>
          <div className="tripTitle w-[50%]">
            <h2
              data-aos="fade-right"
              className="text-white text-5xl w-[60%] font-bold pb-10 leading-[4rem]"
              style={{ fontFamily: "unset" }}
            >
              Enjoy Wonderful <span className="text-orange-400"> Cuisines</span>
            </h2>
            <p
              data-aos="fade-up"
              className="w-[75%] text-white text-[1.3rem] leading-[1.9rem]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex
              culpa, commodi modi iure maxime eligendi recusandae, cumque est
              repudiandae quas, velit corporis eaque tempora fuga debitis
              accusamus! Neque, ipsam.
            </p>
          </div>
        </div>
        <div className="upperSec ml-32 flex justify-center items-center h-[33%]">
          <div className="tripTitle w-[50%]">
            <h2
              data-aos="fade-right"
              className="text-white text-5xl w-[60%] font-bold pb-10 leading-[4rem]"
              style={{ fontFamily: "unset" }}
            >
              Explore the unique{" "}
              <span className="text-orange-400"> Culture</span>
            </h2>
            <p
              data-aos="fade-up"
              className="w-[75%] text-white text-[1.3rem] leading-[1.9rem]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex
              culpa, commodi modi iure maxime eligendi recusandae, cumque est
              repudiandae quas, velit corporis eaque tempora fuga debitis
              accusamus! Neque, ipsam.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.2 }} className="tripImg">
            <img src="/src/assets/temple.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default TripSec;
