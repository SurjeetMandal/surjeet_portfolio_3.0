import { useRef, useState } from "react";
import Education from "./Education ";
import Experience from "./Experience";
import Skills from "./Skills";
import { useScroll, motion, useTransform } from "motion/react";

const Resume = () => {
  const [resumeDetail, setResumeDetail] = useState("education");
  const titleRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"]
  })

  const transformTop = useTransform(scrollYProgress, [0,1], ["0%", "-15%"]);
  const transformBottom = useTransform(scrollYProgress, [0,1], ["0%", "15%"]);

  return (
    <div className="lg:max-w-[1660px] lg:mx-auto py-24 md:py-32 lg:py-40" id="resume">
      <div>
        <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden" ref={titleRef}>
          <motion.span className="whitespace-nowrap leading-xl"
            style={{
              x: transformBottom
            }}
          >All you need to know about me</motion.span>
          <motion.span className="whitespace-nowrap self-end text-red-orange-500 leading-8xl mb-2"
            style={{
              x: transformTop
            }}
          >All you need to know about me</motion.span>
        </h2>
      </div>

      <div className="container max-w-none md:flex md:flex-row-reverse justify-between mt-14 md:mt-28 lg:mt-40 gap-10">
        {/* Links */}
        <div className="flex items-center md:items-start text-xl sm:text-[26px] justify-between md:text-4xl lg:text-5xl md:flex md:flex-col md:gap-14 md:w-[30%] self-start h-full md:sticky md:top-20">
          <p
            onClick={() => setResumeDetail("education")}
            className={`cursor-pointer md:mt-2 transition-all duration-300 hover:scale-90  ${
              resumeDetail === "education" ? "bg-red-orange-500 p-2 text-white" : ""
            }`}
          >
            Education
          </p>
          <p
            onClick={() => setResumeDetail("experience")}
            className={`cursor-pointer transition-all duration-300 hover:scale-90 ${
              resumeDetail === "experience" ? "bg-red-orange-500 p-2 text-white" : ""
            }`}
          >
            Experience
          </p>
          <p
            onClick={() => setResumeDetail("skills")}
            className={`cursor-pointer transition-all duration-300 hover:scale-90 ${
              resumeDetail === "skills" ? "bg-red-orange-500 p-2 text-white" : ""
            }`}
          >
            Skills
          </p>
        </div>

        {/* Content */}
        <div className="md:w-[70%] mt-10 md:mt-0 fle justify-center">
          {resumeDetail === "education" && 
          <div className="flex justify-center md:justify-start">
            <Education />
          </div>}

          {resumeDetail === "experience" && 
            <div className="flex justify-center md:justify-start">
              <Experience />
            </div>
          }
          
          {resumeDetail === "skills" && 
            <div className="flex justify-center md:justify-start">
              <Skills />
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Resume;
