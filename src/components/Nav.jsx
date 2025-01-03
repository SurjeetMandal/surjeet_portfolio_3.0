import { useState } from "react";
import Button from "./Button";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

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
  {
    href: "#contact",
    lable: "Contact",
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, TopLineAnimate] = useAnimate();
  const [bottomLineScope, BottomLineAnimate] = useAnimate();
  const [navScope, NavAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      TopLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);

      NavAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );

      BottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);
    } else {
      TopLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      BottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      NavAnimate(
        navScope.current,
        {
          height: "0%",
        },
        {
          duration: 0.3,
        }
      );
    }
  }, [
    BottomLineAnimate,
    NavAnimate,
    TopLineAnimate,
    bottomLineScope,
    isOpen,
    navScope,
    topLineScope,
  ]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "public/Surjeet Resum 2.0.pdf"; // Replace with your file URL
    link.download = "Surjeet Resum 2.0.pdf"; // Replace with the desired file name
    link.click();
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-50"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col h-[75vh]" onClick={() => setIsOpen(false)}>
          {navItems.map(({ lable, href }) => (
            <a
              href={href}
              key={lable}
              className="text-stone-200 lg:w-[1440px] lg:mx-auto border-t border-stone-800 last:border-b py-8 hover:px-8 transition-all duration-500 hover:bg-stone-800"
            >
              <div className="container max-w-none flex items-center justify-between">
                <div className="text-3xl font-light">{lable}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </a>
          ))}
        </nav>
      </div>

      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-lg z-40">
        <div className="container max-w-none lg:max-w-[1660px] lg:mx-auto">
          <div className="flex h-20 items-center justify-between w-full">
            <div className="logo mix-blend-difference">
              <a href="/" className="text-xl font-bold main_logo text-white">
                SURJEET&nbsp; MANDAL
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full z-40">
        <div className="container max-w-none lg:max-w-[1660px] lg:mx-auto">
          <div className="flex h-20 items-center justify-end w-full">
            <div className="menu flex gap-4">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="menu_icon size-11 border cursor-pointer border-stone-400 bg-stone-200 rounded-full flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                    }}
                  />

                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                    }}
                  />
                </svg>
              </div>

              <Button
                onClick={handleDownload}
                primary
                text_content={"Download CV"}
                className="hidden md:inline-flex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
