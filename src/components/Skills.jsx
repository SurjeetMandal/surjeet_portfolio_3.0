import { motion } from "framer-motion";
import circle_img from "../assets/circle_tick.svg";

const Skills = () => {
  // Animation variants for smooth transitions
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex gap-5 flex-wrap"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="box shadow-lg bg-white p-4 sm:p-4 rounded-md md:mt-2 md:w-[410px] w-full lg:w-[410px] border-b border-red-orange-500"
        variants={itemVariants}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl">FullStack Skills</p>

        <div className="mt-6">
          <motion.div className="line flex flex-row w-full gap-6" variants={containerVariants}>
            <div className="col1 flex flex-col gap-5 w-full md:w-[50%]">
              {[
                { name: "HTML", level: "Advance" },
                { name: "CSS", level: "Advance" },
                { name: "JavaScript", level: "Advance" },
                { name: "FramerMotion", level: "Basic" },
                { name: "Firebase", level: "Basic" },
              ].map((skill, index) => (
                <motion.div key={index} className="flex gap-2" variants={itemVariants}>
                  <img src={circle_img} alt={`${skill.name}`} />
                  <div>
                    <p className="text-lg md:text-xl text-stone-800">{skill.name}</p>
                    <p className="text-sm md:text-base text-stone-500">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="col2 flex flex-col gap-5 w-full md:w-[50%]">
              {[
                { name: "SCSS", level: "Intermediate" },
                { name: "React JS", level: "Intermediate" },
                { name: "TypeScript", level: "Basic" },
                { name: "MySQL", level: "Basic" },
              ].map((skill, index) => (
                <motion.div key={index} className="flex gap-2" variants={itemVariants}>
                  <img src={circle_img} alt={`${skill.name}`} />
                  <div>
                    <p className="text-lg md:text-xl text-stone-800">{skill.name}</p>
                    <p className="text-sm md:text-base text-stone-500">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="box shadow-lg bg-white p-4 sm:p-4 rounded-md md:mt-2 md:w-[410px] w-full lg:w-[410px] border-b border-red-orange-500"
        variants={itemVariants}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl">Others Skills</p>

        <div className="mt-6">
          <motion.div className="line flex flex-row w-full gap-6" variants={containerVariants}>
            <div className="col1 flex flex-col gap-5 w-full md:w-[50%]">
              {[
                { name: "C", level: "Basic" },
                { name: "Python", level: "Basic" },
                { name: "Figma", level: "Intermediate" },
              ].map((skill, index) => (
                <motion.div key={index} className="flex gap-2" variants={itemVariants}>
                  <img src={circle_img} alt={`${skill.name}`} />
                  <div>
                    <p className="text-lg md:text-xl text-stone-800">{skill.name}</p>
                    <p className="text-sm md:text-base text-stone-500">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="col2 flex flex-col gap-5 w-full md:w-[50%]">
              {[
                
              ].map((skill, index) => (
                <motion.div key={index} className="flex gap-2" variants={itemVariants}>
                  <img src={circle_img} alt={`${skill.name}`} />
                  <div>
                    <p className="text-lg md:text-xl text-stone-800">{skill.name}</p>
                    <p className="text-sm md:text-base text-stone-500">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;

