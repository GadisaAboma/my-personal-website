import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering"
            subTitle="Jimma University"
            result="3.80/4"
            des="I earned my Bachelor of Science in Software Engineering from Jimma University in 2022, where I delved into extensive studies on software development methodologies, systems analysis, and user-centric design. My academic journey was enriched with practical experiences from collaborative projects and individual assignments, emphasizing coding, innovative problem-solving, and agile project management. These experiences prepared me to thrive in fast-paced technical environments, equipping me with a deep understanding of both the theoretical and practical aspects of software engineering. My education at Jimma University not only sharpened my technical abilities but also developed my skills in teamwork and technology adaptation, laying a strong foundation for my career in the technology sector."
          />
          {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          /> */}
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;
