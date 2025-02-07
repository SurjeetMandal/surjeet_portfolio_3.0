import { useContext } from "react";
import img1 from "../assets/Project1.png";
import img3 from "../assets/Project3-removebg-preview.png";
import img4 from "../assets/Project4-removebg-preview.png";
import img5 from "../assets/Project5-removebg-preview.png";
import img6 from "../assets/Project6.png"

import { AppContext } from "../context/AppContext";

const projects = [
  {
    name: "Trade With Techack | Trading Platform",
    img: img6,
    details: `<span class="colorPara">A <span class="medium">comprehensive trading platform</span> designed for an experienced options trading instructor with 3+ years of expertise.  
              The platform allows users to <span class="medium">purchase online courses</span>, subscribe to <span class="medium">premium Telegram trading channels</span>,  
              and access <span class="medium">portfolio management services</span>.  
              Built with several dynamic routes, It features <span class="medium">SEO optimization</span>, a sitemap.xml, robots.txt, and seamless email integration using EmailJS.</span>`,
    techStack: ["React.js", "Vite", "Framer Motion", "React Toast", "React Icons", "EmailJS", "Tailwind CSS", "Custom CSS"],
    gitLink: "empty",
    liveLink: "https://tradewithtechack.com/",
  },
  {
    name: "FashionHub | E-Commerce Web App",
    img: img3,
    details: `<span class="colorPara>A <span class="medium">modern e-commerce platform</span> designed for fashion enthusiasts,  
              featuring a <span class="medium">responsive and visually appealing UI</span>.  
              Integrated with a fake product API, it includes <span class="medium">user authentication</span>,  
              advanced <span class="medium">product filtering</span>, and secure <span class="medium">Razorpay payment gateway</span>.  
              Developed using local storage for seamless user experience and based on a free Figma design.</span>`,
    techStack: ["HTML", "CSS", "JavaScript", "Razorpay API","Fake API"],
    gitLink: "https://github.com/SurjeetMandal/surjeet_simple_ecommerce_cart",
    liveLink: "https://surjeet-simple-ecommerce-cart-site.netlify.app/",
  },
  {
    name: "The Hype Department | Freelancer Portfolio",
    img: img4,
    details: `<span class="colorPara">A <span class="medium">professional portfolio website</span> crafted for a freelancer to showcase their  
              <span class="medium">projects, skills, and experience</span>.  
              The site features a <span class="medium">clean, interactive, and animated UI</span>,  
              ensuring a strong online presence with smooth navigation and engaging visuals.</span>`,
    techStack: ["React.js", "Framer Motion"],
    gitLink: "empty",
    liveLink: "https://www.thehypedepartment.com/",
  },
  {
    name: "Finsweet | Static Multi-Page Web App",
    img: img5,
    details: `<span class="colorPara">A <span class="medium">static multi-page web application</span> built to explore  
              <span class="medium">React's component-based architecture</span>.  
              Designed with a <span class="medium">structured layout</span>, modular components, and smooth navigation,  
              it offers a beginner-friendly and scalable web experience with a responsive design.</span>`,
    techStack: ["React.js"],
    gitLink: "https://github.com/SurjeetMandal/surjeet-frontend1",
    liveLink: "https://surjeet-frontend1.netlify.app/",
  },
  {
    name: "Quizopia | Interactive Quiz Platform",
    img: img1,
    details: `<span class="colorPara">An <span class="medium">interactive quiz application</span> designed to make learning fun and engaging.  
              Features include a <span class="medium">visually appealing UI</span> based on the 60-30-10 color rule,  
              multiple <span class="medium">quiz categories</span>, detailed answer reviews, and  
              <span class="medium">performance tracking</span> to enhance user engagement and learning outcomes.</span>`,
    techStack: ["HTML", "CSS", "JavaScript"],
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
