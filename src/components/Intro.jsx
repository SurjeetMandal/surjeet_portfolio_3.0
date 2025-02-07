import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

const Intro = () => { 
  const [scope, animate] = useAnimate(); 
  const view = useInView(scope, { once: true }); 

  useEffect(() => {
    if (scope.current) {
      new SplitType(scope.current.querySelector("h2"), {
        types: "lines, words",
        tagName: "span",
      });
    }
  });

  useEffect(() => {
    if (view) {
      // Animate words when the section enters the viewport
      animate(
        scope.current.querySelectorAll(".word"),
        { transform: "translateY(0%)" },
        {
          duration: 0.3,
          delay: stagger(0.2),
        }
      );
    }
  }, [animate, scope, view]);

  return (
    <section
      className="py-24 mt-12 md:py-32 md:mt-32 lg:py-40 lg:mt-40 lg:max-w-[1660px] lg:mx-auto relative"
      ref={scope} 
    >
      <div className="container max-w-none">
        <h2
          className="text-4xl md:text-7xl lg:text-[82px] tracking-tighter"
          style={{ lineHeight: 1.18}}
        >
          Hi!✋I&rsquo;m a Frontend Developer and aspiring Full-Stack Engineer from
          India, specialize in crafting pixel-perfect, responsive UIs with React.js, focused on delivering seamless user experiences. 🚀
        </h2>
      </div>
    </section>
  );
};

export default Intro;

