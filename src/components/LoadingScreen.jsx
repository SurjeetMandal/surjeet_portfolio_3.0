import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Updated to use the correct 'framer-motion' package

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate loading (2 seconds)
    setTimeout(() => {
      setLoadingComplete(true);
      setTimeout(() => setLoading(false), 1000); // Remove loading screen after fade-out
    }, 2000); // Simulating a 2-second loading time
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <>
      {/* Loading screen */}
      {loading && (
        <motion.div
          className={`fixed inset-0 bg-black flex flex-col justify-center items-center z-50`}
          initial={{ opacity: 1 }}
          animate={{ opacity: loadingComplete ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Fancy loading text */}
          <div className="flex gap-5">
            {["LEARN", "DEVELOP", "REPEAT"].map((word, index) => (
              <motion.div
                key={word}
                className="text-md text-stone-200 outfit"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.5 + index * 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default LoadingScreen;



