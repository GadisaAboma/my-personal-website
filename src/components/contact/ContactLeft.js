import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { bannerImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-84 object-cover rounded-lg mb-2"
        src={bannerImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Gadisa Aboma</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer - Full Stack Engineer
        </p>

        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+251967436185</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">gadaboma@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
