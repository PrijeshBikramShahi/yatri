import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { motion } from "framer-motion";
AOS.init();
const HeroPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const [cursorVariant, setCursorVariant] = useState("default");
  const variants = {
    default: {
      x: mousePosition.x - 13,
      y: mousePosition.y - 160,
    },
    text: {
      backgroundColor: "white",
      x: mousePosition.x - 13,
      y: mousePosition.y - 160,
      mixBlendMode: "difference",
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <div className=" cursor-none">
      <motion.div
        className="cursor h-16 w-16 rounded-full bg-white pointer-events-none"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <div className=" justify-evenly h-screen flex">
        <div className=" my-auto">
          <div
            className=" text-8xl text-white font-bold mb-40"
            style={{ fontFamily: "unset" }}
          >
            <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
              Life is too short to stay put.
            </h1>
          </div>
        </div>
        {/* <div className="scrollIcon">
        <FontAwesomeIcon className=" size-16" inverse icon={faArrowDown} />
      </div> */}
      </div>
    </div>
  );
};

export default HeroPage;
