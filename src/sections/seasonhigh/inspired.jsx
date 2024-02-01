import React from "react";
import "react-carousel-animated/dist/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const SeasonHigh = ({ iRef }) => {
  const imgSrc = [
    "https://shorturl.at/bnOVZ",
    "https://shorturl.at/bnOVZ",
    "https://shorturl.at/bnOVZ",
    "https://shorturl.at/bnOVZ",
  ];
  return (
    <div ref={iRef} className="h-screen bg-black">
      <div className="SeasonsSection w-screen h-screen max-w-[90%] max-h-[90%] bg-[url('/src/assets/carousel1.jpeg')] bg-cover my-auto mx-auto rounded-[1.5rem]">
        <div className="upperSection w-[100%] h-[100%] flex justify-between">
          <div className="textSection text-white my-auto ml-[5%]">
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-5xl font-bold mb-2"
              style={{ fontFamily: "unset" }}
            >
              VISIT US AT
            </h2>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-5xl font-bold text-orange-400"
              style={{ fontFamily: "unset" }}
            >
              SWAYAMBHUNATH
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="w-[50%] text-[1rem] mt-7"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              consequuntur. Quaerat recusandae dolores sapiente, repellendus
              magni facilis fuga tempora nesciunt ipsam dignissimos vel ut
              libero, a impedit possimus, quo amet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Non, consequuntur. Quaerat
              recusandae dolores sapiente, repellendus magni facilis fuga
              tempora nesciunt ipsam dignissimos vel ut libero, a impedit
              possimus, quo amet.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-anchor-placement="bottom-bottom"
            className="carouselSection h-3/6 w-[800px]
            bg-[url('/src/assets/carousel1_portrait.jpeg')] bg-cover mr-[5%]
            mt-[25%] rounded-[1rem] my-auto"
          >
            <div className="imgComponent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonHigh;
