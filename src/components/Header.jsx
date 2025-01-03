import { useScroll, useTransform, motion } from "motion/react";
import heroImg from "../assets/Untitled-modified.jpg";
import Button from "./Button";
import SplitType from "split-type";
import { useAnimate } from "motion/react";
import { useEffect, useRef } from "react";
import { stagger } from "motion";

const Header = () => {
  const titlescope = useRef(null);
  const scrollingDiv = useRef(null);
  const [, animate] = useAnimate();

  // Initialize useScroll and extract scrollYProgress
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const handleSendEmail = () => {
    window.location.href = "mailto:surjeetmandal48@gmail.com?subject=Hello&body=I%20want%20to%20discuss...";
  };

  // Define transform mapping
  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    // Delay the animation by 3 seconds using setTimeout
    const timeoutId = setTimeout(() => {
      if (titlescope.current) {
        // Split the text into lines and words
        new SplitType(titlescope.current, {
          types: "lines, words",
          tagName: "span",
        });

        const words = titlescope.current.querySelectorAll(".word");
        if (words.length) {
          // Animate words after the delay
          animate(
            words,
            { transform: "translateY(0)", opacity: 1 },
            { duration: 0.5, delay: stagger(0.3) }
          );
        }
      }
    }, 2100); // Delay for 3 seconds (3000 ms)

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [animate]);

  return (
    <motion.div
      initial={{opacity: 0, y:200}}
      animate={{opacity: 1, y:0}}
      transition={{delay: 2.1, duration:0.8}}
    >
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0 lg:max-w-[1660px] lg:mx-auto" id="home">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <h1
              ref={titlescope}
              className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-20 leading-tight md:leading-tight lg:leading-tight"
            >
              Merging Curiosity and Code to Engineer Digital Excellence
            </h1>
            <div className="flex flex-col mt-10 items-start gap-6 md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 4.8 }}
              >
                <Button
                  secondary
                  className={"flex"}
                  text_content={
                    <a href="#projects" className="flex items-center gap-2">
                      <span>View My Work</span>
                      <div className="overflow-hidden size-5">
                        <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  }
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 5.4 }}
                className="relative"
              >
                <Button onClick={handleSendEmail} text_content={"Let's Talk"} text></Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 w-full md:mt-0 md:h-full md:absolute md:right-0 max-md:!w-full"
            style={{ width: portraitWidth }}
          >
            <img src={heroImg} alt="" className="size-full object-cover" />
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh]" ref={scrollingDiv}></div>
    </motion.div>
  );
};

export default Header;

