import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
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
              {" "}
              <FaFacebookF />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
