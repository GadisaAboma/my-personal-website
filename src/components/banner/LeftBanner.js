import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Full Stack Developer.",
      "Mobile App Developer.",
      "Flutter Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">HI THERE WELCOME</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Gadisa Aboma</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm Passionate and innovative Full Stack Software Engineer with a
          strong proficiency in mobile and web application development. Expert
          in Flutter, Reactjs, Nodejs, Nestjs, I specialize in crafting dynamic,
          user-centric solutions that enhance engagement and functionality.
          Dedicated to embracing cutting-edge technologies, I strive to deliver
          efficient and scalable software products that meet diverse client
          needs.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
