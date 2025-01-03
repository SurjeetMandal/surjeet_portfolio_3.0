import PropTypes from "prop-types";
import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
const Button = ({ primary, secondary, text_content, className, svg, onClick }) => {
  return (
    <>
      {primary ? (
        <motion.button onClick={onClick} className={`h-11 px-6 rounded-lg border-red-orange-500 gap-2 bg-red-orange-500 text-white items-center ${className}`}
          whileTap={{scale: 0.9}}
          whileHover={{scale: 1.1}}
        >
          {text_content}
        </motion.button>
      ) : secondary ? (
        <button onClick={onClick} className={`flex hover:bg-red-orange-500 group/button hover:text-white transition duration-500 h-11 px-6 border text-black rounded-lg border-red-orange-500 items-center gap-2 ${className}`}>
          {text_content}
          {svg}
        </button>
      ) : (
        <button onClick={onClick} className={`after:[""] after:h-[1px] after:w-0 after:absolute after:top-full after:left-0 after:transition-all after:duration-300 after:bg-red-orange-500 hover:after:w-full ${className}`}>{text_content}</button>
      )}
    </>
  );
};

// Define PropTypes for validation
Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  text_btn: PropTypes.string,
  className: PropTypes.string,
};


export default Button;
