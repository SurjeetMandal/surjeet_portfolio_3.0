import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Button from './Button';
import close from "../assets/card_close.svg";
import { motion } from "motion/react";

const Modal = () => {
    const { modal, setModal, projectData } = useContext(AppContext);

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    
        return () => {
            document.body.style.overflow = "auto"; // Ensures cleanup is safe
        }
    }, [modal]);

    return (
        <>
            {modal && (
                <div className="fixed top-0 right-0 bottom-0 left-0 z-20 flex backdrop-blur-sm bg-black/30 justify-center items-center">
                    <motion.div className="container max-w-none lg:max-w-[1660px] flex justify-center"
                        initial={{opacity: 0, y:50}}
                        animate={{opacity: 1, y:0}}
                        transition={{duration:0.3}}
                    >
                        <div className="bg-white rounded-xl md:rounded-3xl shadow-lg flex flex-col overflow-hidden md:w-[800px]">
                            <div className="flex flex-col lg:flex-row">

                                <div className="w-full sm:text-xl md:text-2xl p-4 md:p-6">
                                    <p className="heading text-[24px] md:text-[32px] font-semibold">
                                        {projectData.name}
                                    </p>
                                    <div
                                        className="project-details mt-2 md:mt-3 text-[15px] md:text-[20px] leading-normal"
                                        dangerouslySetInnerHTML={{ __html: projectData.details }}
                                    />

                                    
                                    <div className="flex gap-2 mt-4 md:mt-6 flex-wrap">
                                            {
                                                projectData.techStack.map((item, index) => (
                                                    <div key={index}>
                                                        <p className="text-[12px] bg-stone-200 px-4 py-1 rounded-full">{item}</p>
                                                    </div>
                                                ))
                                            }
                                    </div>
                                    

                                    <div className="flex text-sm sm:text-base md:text-lg mt-4 md:mt-6 justify-between items-center">

                                        <div className="flex gap-2">
                                            <a href={projectData.liveLink} target="blank">
                                                <Button primary text_content={"Live Preview"} />
                                            </a>
                                            <a href={projectData.gitLink} target="blank">
                                                <Button secondary text_content={"Code Link"} />
                                            </a>
                                        </div>

                                        <img onClick={() => setModal(false)} src={close} alt="" className="size-7 self-end m-2 cursor-pointer"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Modal;


