import { motion } from "framer-motion";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium">GUVI</p>
          <p className="text-lg md:text-xl lg:text-2xl font-normal text-gray-500">
            Design Intern
          </p>
          <p className="text-lg md:text-xl lg:text-2xl bg-red-orange-500 self-start px-2 py-1 text-white">
            2024 September
          </p>
        </motion.div>
        <motion.div className="flex flex-col mt-6" variants={itemVariants}>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium">Sewa Bharti</p>
          <p className="text-lg md:text-xl lg:text-2xl font-normal text-gray-500">
            Teacher&apos;s Assistant
          </p>
          <p className="text-lg md:text-xl lg:text-2xl bg-red-orange-500 self-start px-2 py-1 text-white">
            2024 August
          </p>
        </motion.div>
      </div>

      {/* SVG Animation */}
      <div className="mt-10 md:mt-12">
        <motion.svg
          className="h-full"
          width="20"
          height="138"
          viewBox="0 0 20 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            x1="9.5"
            y1="10"
            x2="9.5"
            y2="128"
            stroke="#FC4B02"
            strokeWidth="3"
            variants={svgLineVariants}
          />
          <motion.circle
            cx="10"
            cy="10"
            r="10"
            fill="#FC4B02"
            variants={svgCircleVariants}
          />
          <motion.circle
            cx="10"
            cy="128"
            r="10"
            fill="#FC4B02"
            variants={svgCircleVariants}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default Experience;
