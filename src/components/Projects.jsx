import { useContext } from "react";
import img1 from "../assets/Untitled design.png";
import { AppContext } from "../context/AppContext";

const projects = [
  {
    name: "Quizopia",
    img: img1,
    details: `<span class="colorPara">A <span class="medium">quiz app</span> designed to make learning interactive and fun, 
              featuring an <span class="medium">engaging UI</span> crafted with the 60-30-10 color rule. The app 
              uses <span class="medium">educational themes</span> and exciting fonts to captivate children. Users can 
              <span class="medium">attempt quizzes</span> on various topics, with features to <span class="medium">review answers</span> and track 
              performance. The app ensures <span class="medium">smooth functionality</span> with JavaScript logic and 
              <span class="medium">modern design elements</span>, creating an enjoyable learning experience.
              </span>`,
    techStack: ["HTML", "CSS", "JavaScript", "FramerMotion"],
    gitLink: "https://github.com/SurjeetMandal/QuizApp-surjeet",
    liveLink: "https://surjeet-quizapp.netlify.app/",
  },
  {
    name: "Quizopia",
    img: img1,
    details: `<span class="colorPara">A <span class="medium">quiz app</span> designed to make learning interactive and fun, 
              featuring an <span class="medium">engaging UI</span> crafted with the 60-30-10 color rule. The app 
              uses <span class="medium">educational themes</span> and exciting fonts to captivate children. Users can 
              <span class="medium">attempt quizzes</span> on various topics, with features to <span class="medium">review answers</span> and track 
              performance. The app ensures <span class="medium">smooth functionality</span> with JavaScript logic and 
              <span class="medium">modern design elements</span>, creating an enjoyable learning experience.
              </span>`,
    techStack: ["HTML", "CSS", "JavaScript", "FramerMotion"],
    gitLink: "https://github.com/SurjeetMandal/QuizApp-surjeet",
    liveLink: "https://surjeet-quizapp.netlify.app/",
  },
  {
    name: "Quizopia",
    img: img1,
    details: `<span class="colorPara">A <span class="medium">quiz app</span> designed to make learning interactive and fun, 
              featuring an <span class="medium">engaging UI</span> crafted with the 60-30-10 color rule. The app 
              uses <span class="medium">educational themes</span> and exciting fonts to captivate children. Users can 
              <span class="medium">attempt quizzes</span> on various topics, with features to <span class="medium">review answers</span> and track 
              performance. The app ensures <span class="medium">smooth functionality</span> with JavaScript logic and 
              <span class="medium">modern design elements</span>, creating an enjoyable learning experience.
              </span>`,
    techStack: ["HTML", "CSS", "JavaScript", "FramerMotion"],
    gitLink: "https://github.com/SurjeetMandal/QuizApp-surjeet",
    liveLink: "https://surjeet-quizapp.netlify.app/",
  },
  {
    name: "Quizopia",
    img: img1,
    details: `<span class="colorPara">A <span class="medium">quiz app</span> designed to make learning interactive and fun, 
              featuring an <span class="medium">engaging UI</span> crafted with the 60-30-10 color rule. The app 
              uses <span class="medium">educational themes</span> and exciting fonts to captivate children. Users can 
              <span class="medium">attempt quizzes</span> on various topics, with features to <span class="medium">review answers</span> and track 
              performance. The app ensures <span class="medium">smooth functionality</span> with JavaScript logic and 
              <span class="medium">modern design elements</span>, creating an enjoyable learning experience.
              </span>`,
    techStack: ["HTML", "CSS", "JavaScript", "FramerMotion"],
    gitLink: "https://github.com/SurjeetMandal/QuizApp-surjeet",
    liveLink: "https://surjeet-quizapp.netlify.app/",
  },
];

const Projects = () => {

  const{ setModal, setProjectData } = useContext(AppContext)

  const handleModal = () => {
    setModal(true);
  }

  return (
    <div className="lg:max-w-[1660px] lg:mx-auto py-24 md:py-32 lg:py-40" id="projects">
      <div className="container max-w-none">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Projects</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map((item, index) => (
            <div
              key={index}
              className="border-t py-6 md:py-8 lg:py-10 border-stone-400 border-dotted last:border-b
              hover:bg-stone-300 duration-500 transition-all group/sss"
            >
              <div className="aspect-video md:hidden">
                <img src={item.img} alt="" className="size-full object-cover rounded-lg" />
              </div>

              <div onClick={()=>{handleModal(); setProjectData(item);}} className="relative
                mt-8 px-2 group-hover/sss:px-6 transition-all duration-500 md:mt-0 flex justify-between items-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl cursor-pointer">{item.name}</h3>

              <div className="flex justify-end lg:right-[-30vw] md:right-[-25vw]
                  w-full absolute opacity-0 scale-0 group-hover/sss:opacity-100 lg:group-hover/sss:scale-[20%]
                  md:group-hover/sss:scale-[30%] z-10 transition-all duration-500">
                <div className="w-full">
                  <img src={item.img} alt="" className="size-full group-hover/sss:px-4"/>
                </div>
              </div>
        
                <div className="overflow-hidden size-6">
                    <div className="flex h-6 w-12 group-hover/sss:-translate-x-1/2 transition-transform duration-300">
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
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
