import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              target="_BLANK"
              href="https://www.linkedin.com/in/gadisa-aboma-5b7934192/"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a target="_BLANK" href="https://www.facebook.com/gadisa.aboma.7/">
              <FaFacebookF />
            </a>{" "}
          </span>
          {/* <span className="bannerIcon">
            <FaTwitter />
          </span> */}
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiFlutter />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
