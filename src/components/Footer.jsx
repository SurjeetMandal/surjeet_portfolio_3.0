import Button from "./Button";
import { motion } from "motion/react";

const navItems = [
  {
    href: "#home",
    lable: "Home",
  },
  {
    href: "#projects",
    lable: "Projects",
  },
  {
    href: "#resume",
    lable: "Resume",
  },
  {
    href: "#faqs",
    lable: "FAQs",
  },
];

const Footer = () => {

  const handleSendEmail = () => {
    window.location.href = "mailto:surjeetmandal48@gmail.com?subject=Hello&body=I%20want%20to%20discuss...";
  };

  return (
    <div className="bg-stone-900 text-white lg:max-w-[1660px] lg:mx-auto" id="contact">
      <div className="container max-w-none">
        <div className="py-24 mt-12 md:py-32 md:mt-16 lg:py-40 lg:mt-20">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 relative">
              <motion.div className="size-3 rounded-full bg-green-400 absolute animate-ping"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
              >
              </motion.div>
            </div>
            <span className="uppercase">Available Now to Work</span>
          </div>

          <div className="grid md:grid-cols-3 items-center">
            <div className="col-span-2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl mt-8 font-extralight">
                Still waiting to work. Happy to learn and develop in
                Colaborative environment.
              </h2>
              <Button
                onClick={handleSendEmail}
                secondary
                text_content={"surjeetmandal698@gmail.com"}
                className={"text-white mt-8 group/hover"}
                svg={
                  <div className="size-5 overflow-hidden">
                    <div className="h-5 flex w-10 group-hover/hover:-translate-x-1/2 transition-transform duration-300">
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
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
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
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                }
              />
            </div>

            <div>
              <nav className="flex flex-col gap-8 mt-16 md:mt-0 md:items-end">
                {navItems.map((item, index) => (
                  <a key={index} href={item.href}>
                    <motion.div className="relative">
                      <Button text_content={item.lable} text></Button>
                    </motion.div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="py-6 text-white/30 text-sm pb-6 font-light flex flex-col-reverse md:flex-row md:justify-between
         md:items-center flex-start">
          <div className="md:w-[40%] w-full">Copyright &copy; Surjeet &bull; All rights reserved</div>

          <div className="text-white/30 lg:w-[1440px] lg:mx-auto">
          <ul className="w-full flex gap-5 md:justify-end justify-start h-full items-end">
            <li className="flex">
              <a href="https://www.linkedin.com/in/surjeet-mandal-a05871282/" target="_blank" className="flex group/hover">
                LinkedIn
                <div className="size-5 overflow-hidden">
                  <div className="h-5 flex w-10 group-hover/hover:-translate-x-1/2 transition-transform duration-300">
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="https://github.com/SurjeetMandal" target="_blank" className="flex group/hover">
                GitHub
                <div className="size-5 overflow-hidden">
                  <div className="h-5 flex w-10 group-hover/hover:-translate-x-1/2 transition-transform duration-300">
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
