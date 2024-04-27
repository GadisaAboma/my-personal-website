import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022 - {new Date().getFullYear()}
          </p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior Application Developer and Team Leader."
            subTitle="Application Developer and team leader."
            result="Success"
            des="
            Elevated to the role of Senior Application Developer and Team Leader, I have successfully led multifaceted software development initiatives, driving team productivity and project completion within demanding timelines. My strategic oversight in developing scalable applications and my leadership in fostering a culture of technical excellence have consistently resulted in high-quality deliverables that have bolstered organizational growth and client satisfaction"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
