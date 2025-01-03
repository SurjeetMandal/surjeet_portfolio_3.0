import { motion } from "framer-motion";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const svgLineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1 } },
  };

  const svgCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex gap-5 md:gap-8 lg:gap-14 mt-10 md:mt-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.div className="flex flex-col" variants={itemVariants}>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium">B.Tech in CSE</p>
          <p className="text-lg md:text-xl lg:text-2xl font-normal text-gray-500">MDU university - Haryana</p>
          <p className="text-lg md:text-xl lg:text-2xl bg-red-orange-500 self-start px-2 py-1 text-white">
            2022-2026
          </p>
        </motion.div>
        <motion.div className="flex flex-col mt-6" variants={itemVariants}>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium">Class XII</p>
          <p className="text-lg md:text-xl lg:text-2xl font-normal text-gray-500">SBV Ashok Nagar - Delhi</p>
          <p className="text-lg md:text-xl lg:text-2xl bg-red-orange-500 self-start px-2 py-1 text-white">
            2021-2022
          </p>
        </motion.div>
        <motion.div className="flex flex-col mt-6" variants={itemVariants}>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium">Class X</p>
          <p className="text-lg md:text-xl lg:text-2xl font-normal text-gray-500">Saint Stephen&apos;s - Kolkata</p>
          <p className="text-lg md:text-xl lg:text-2xl bg-red-orange-500 self-start px-2 py-1 text-white">
            2019-2020
          </p>
        </motion.div>
      </div>

      {/* SVG Animation */}
      <div className="mt-10 md:mt-12">
        <motion.svg
          className="h-full"
          width="20"
          height="300"
          viewBox="0 0 20 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            x1="10"
            y1="0"
            x2="9.5"
            y2="230"
            stroke="#FC4B02"
            strokeWidth="3"
            variants={svgLineVariants}
          />
          <motion.circle
            cx="10"
            cy="-10"
            r="10"
            fill="#FC4B02"
            variants={svgCircleVariants}
          />
          <motion.circle
            cx="10"
            cy="105"
            r="10"
            fill="#FC4B02"
            variants={svgCircleVariants}
          />
          <motion.circle
            cx="10"
            cy="225"
            r="10"
            fill="#FC4B02"
            variants={svgCircleVariants}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default Education;

