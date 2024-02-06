import React from 'react';
import otherStore from "../../store/otherStore.js";
import {motion} from "framer-motion";
import Carousel from "./Carousel.jsx";
import EventSkeleton from "../../skeleton/Event-Skeleton.jsx";
import {Link} from "react-router-dom";
import {FaCalendarAlt} from "react-icons/fa";

const Events = () => {

    const {eventList} = otherStore();

    if(eventList === null){
        return   <EventSkeleton />
    }
    else {
        return (
            <section className="lg:py-10 py-6">
                <div className="lg:py-10 py-6 flex items-center justify-center flex-col">
                    <motion.h2 initial={{x: -250}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}
                         className="lg:text-[2.5rem] md:text-[2rem] uppercase text-[1.3rem] font-[sans-serif]
                         font-bold text-primary ">
                       Latest Events
                    </motion.h2>
                    <div className="lg:w-20  w-12 h-[2px] bg-neutral rounded"></div>
                </div>

                <div className={"grid grid-cols-1 px-5 gap-5"}>
                    {
                        eventList.slice(0,2).map((item,i)=>{
                           return (
                               <Link  to={"/"} className="flex p-5 rounded-md items-start justify-between gap-10 bg-base-100">
                                   <div className={"w-full"}>
                                       <img  src={item['img']} className={" w-full rounded-md h-[280px]"} alt={""} />
                                   </div>
                                   <div className={"w-full flex flex-col gap-3"}>
                                       <div className={"flex text-warning items-center gap-1"}>
                                           <h1 className={"lg:text-xl font-bold"}><FaCalendarAlt/></h1>
                                           <h1 className={"lg:text-xl font-bold"}>{item['date']}</h1>
                                       </div>
                                       <h2 className={"lg:text-3xl font-bold uppercase"}>{item['title']}</h2>
                                       <p className={"text-gray-600"}>
                                           {
                                               item['des'].slice(0,195)
                                           }
                                           <span className={"text-neutral text-lg font-semibold"}>
                                               <Link to={"/"}>...See More</Link>
                                           </span>
                                       </p>

                                   </div>
                               </Link>
                           )
                        })
                    }
                </div>

            </section>
        );
    }


};

export default Events;