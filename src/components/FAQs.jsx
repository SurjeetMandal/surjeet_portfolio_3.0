import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const FAQ = [
    {
        question: "Who am I, and what do I do?",
        answer: "→ I am Surjeet Mandal, a passionate web developer and tech enthusiast currently pursuing Computer Engineering."
    },
    {
        question: "What are my key skills?",
        answer: "→ My key skills include HTML, CSS, JavaScript, React, React Native, Python (basic), and Google Cloud Platform (GCP)."
    },
    {
        question: "What projects have I worked on?",
        answer: "→ I have worked on projects like a Simple E-Commerce Cart, NASA Picture of the Day Web App, and a Time Zone Information Retrieval Webpage. These projects demonstrate my ability to build user-centric, scalable applications, which I can leverage for freelance work or in a dynamic role at an MNC."
    },
    {
        question: "How do I, as a fresher, approach challenges in learning and development?",
        answer: "→ I see every challenge as an opportunity to grow and innovate. As someone passionate about technology, I dive deep into understanding new concepts, experimenting with tools, and building projects that push my limits. I believe learning never stops, and I’m always eager to explore uncharted territories, collaborate with others, and create solutions that make a difference. My goal is to turn ideas into impactful projects while constantly improving my skills along the way."
    },
    {
        question: "How can you contact me?",
        answer: "→ You can reach me via email at surjeetmandal@gmail.com or call me at (+91) 9910781850."
    },
];


const FAQs = () => {

    const[selectedIndex, setSelectedIndex] = useState()

  return (
    <div className="lg:max-w-[1660px] lg:mx-auto py-24 md:py-32 lg:py-40" id="faqs">
      <div className="container max-w-none">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        
        <div className="mt-10 md:mt-16 lg:mt-20">
            {
                FAQ.map((item, index)=>(
                    <div key={index} onClick={()=>{
                        if(index === selectedIndex){
                            setSelectedIndex(null)
                        }else{
                            setSelectedIndex(index)
                        }
                    }} className={`hover:bg-stone-300 transition-all duration-300 md:hover:px-4 hover:px-2 lg:hover:px-8
                    border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b ${selectedIndex === index && "bg-stone-300 px-2 md:px-4 lg:px-8"}`}>
                        <div className="flex justify-between gap-6 items-center">
                            <div>
                                <p className="text-2xl md:text-3xl lg:text-4xl">{item.question}</p>
                            </div>
                            <div className={twMerge("inline-flex bg-stone-200 items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300", selectedIndex === index && "rotate-45")}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        </div>
                        <AnimatePresence>
                        {
                            selectedIndex === index && (
                                <motion.div
                                className="overflow-hidden"
                                    initial={{height: 0}}
                                    animate={{height: 'auto'}}
                                    exit={{height: 0}}
                                    transition={{duration: 0.3, ease: "easeOut"}}
                                >
                                    <p className="text-xl mt-4">{item.answer}</p>
                                </motion.div>
                            )
                        }
                        </AnimatePresence>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default FAQs
