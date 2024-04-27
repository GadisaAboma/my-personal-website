import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022 - {new Date().getFullYear()}
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Application Developer"
            subTitle="Vintage Technologies"
            result="Ethiopia"
            des="I am currently serving as an Application Developer and Team Leader at Vintage Technologies, where my role encompasses leading the development process, managing a team of skilled professionals, and ensuring the delivery of high-quality software applications that meet our clients' specifications and industry standards. My responsibilities include overseeing project lifecycles, fostering a collaborative environment, and guiding the strategic direction of our technological solutions."
          />
          <ResumeCard
            title="Full-stack Engineer(Part-time)"
            subTitle="RocketDev"
            result="USA"
            des="Additionally, I am engaged in a part-time capacity as a Full-Stack Engineer with RocketDev, where I apply my comprehensive knowledge of both front-end and back-end development to build and maintain complete software solutions. My role involves integrating user-facing elements with server-side logic, optimizing applications for maximum speed and scalability, and ensuring technical feasibility of UI/UX designs, while upholding best practices in coding and systems design"
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Experience;
