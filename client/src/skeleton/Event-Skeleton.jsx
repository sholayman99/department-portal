import React from 'react';
import {motion} from "framer-motion";

const EventSkeleton = () => {
    return (
        <section className="lg:p-16 p-10">
            <div className="lg:py-10 py-6 flex items-center justify-center flex-col">
                <motion.h2 initial={{x: -250}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}
                           className="lg:text-[2.5rem] md:text-[2rem] uppercase text-[1.3rem] font-[sans-serif]
                         font-bold text-primary ">
                    Events
                </motion.h2>
                <div className="lg:w-20  w-12 h-[2px] bg-neutral rounded"></div>
            </div>
           <div className={"grid grid-cols-1 gap-10"}>
               {
                   Array.from({length:2}).map((i)=>{
                       return (
                           <div key={i} className="flex flex-col  gap-4 w-full">

                               <div className="skeleton h-3 w-28"></div>
                               {
                                   Array.from({length: 10}).map((i) => {
                                       return (
                                           <div key={i} className="skeleton h-2 w-full"></div>
                                       )
                                   })
                               }
                           </div>
                       )
                   })
               }
           </div>

        </section>
    );
};

export default EventSkeleton;