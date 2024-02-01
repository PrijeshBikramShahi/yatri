import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomePage from "../../sections/homepage/home";
import { motion } from "framer-motion";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const NavBar = ({ handleClick, handleClick2 }) => {
  const containerVariants = {
    expanded: {
      width: 50,
    },
    collapsed: {
      width: 30,
    },
  };
  const [isExpanded, setExpanded] = useState(false);
  const expandContainer = () => {
    setExpanded(true);
  };
  const collapseContainer = () => {
    setExpanded(false);
  };
  return (
    <div>
      <nav className="navbar flex justify-between items-center px-14 pt-10 w-screen max-w-[95%] mx-auto">
        <motion.div
          whileHover={{
            scale: 1.3,

            transition: { duration: 0.3 },
          }}
          className="menuBar"
        >
          <FontAwesomeIcon className=" size-10 pt-2" inverse icon={"bars"} />
        </motion.div>
        <div className="logoSection flex">
          <div className="spaceGap w-[80px]"></div>
          <img
            className=" object-cover size-22 h-28 w-30"
            src="/src/assets/logo_light.png"
            alt=""
          />
        </div>
        <div className="iconsSec flex gap-6">
          <motion.div
            whileHover={{
              scale: 1.3,
              rotate: 360,
              transition: { duration: 0.3 },
            }}
            className="iconSearch"
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={containerVariants}
          >
            <FontAwesomeIcon
              onClick={isExpanded ? collapseContainer : expandContainer}
              className="size-8 pt-2"
              inverse
              icon={"search"}
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,

              transition: { duration: 0.3 },
            }}
            onClick={handleClick2}
            className="iconHeart"
          >
            <FontAwesomeIcon
              className="size-8 pt-2"
              inverse
              icon={"fa-heart"}
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,

              transition: { duration: 0.3 },
            }}
            onClick={handleClick}
            className="iconWeather"
          >
            <FontAwesomeIcon
              className="size-8 pt-2"
              inverse
              icon={"cloud-sun"}
            />
          </motion.div>
        </div>
      </nav>
      {/* <hr className="border-t border-black mt-4" /> */}
    </div>
  );
};

export default NavBar;
