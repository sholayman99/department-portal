import React from 'react';
import {motion} from "framer-motion"
import Carousel from "./Carousel.jsx";


const AcademicProgrammes = () => {

        return (
            <section className="lg:py-10 py-6">
                <div className="lg:py-10 py-6 flex items-center justify-center flex-col">
                    <motion.h2 initial={{x:-250}} transition={{ duration: 1.5,ease:"easeOut"}} whileInView={{x:0}}
                        className="lg:text-[2.5rem] md:text-[2rem] uppercase text-[1.3rem] font-[sans-serif]
                         font-bold text-primary ">
                        Academic Programmes
                    </motion.h2>
                    <div className="lg:w-20  w-12 h-[2px] bg-neutral rounded"></div>

                </div>
                <Carousel />
            </section>
        );
};

export default AcademicProgrammes;