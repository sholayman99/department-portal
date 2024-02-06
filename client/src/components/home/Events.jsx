import React from 'react';
import otherStore from "../../store/otherStore.js";
import {motion} from "framer-motion";
import Carousel from "./Carousel.jsx";
import EventSkeleton from "../../skeleton/Event-Skeleton.jsx";
import {Link, useNavigate} from "react-router-dom";
import {FaCalendarAlt} from "react-icons/fa";

const Events = () => {

    const {eventList} = otherStore();
    const navigate = useNavigate();

    const visitAllEvent =()=>{
        navigate("/all-events")
    }



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

                <div className={"grid grid-cols-1 px-5 gap-10"}>
                    {
                        eventList.slice(0, 2).map((item, i) => {
                            return (
                                <Link to={`/event-details/${item['_id']}`}
                                      className="flex lg:p-5 md:p-5 p-2.5 lg:flex-row flex-col border-neutral
                                rounded-md items-start justify-between gap-10 bg-base-100 hover:border-2
                                cursor-pointer hover:scale-y-105 transition duration-500 ease-in-out">
                                    <div className={"w-full"}>
                                        <img src={item['img']}
                                             className={" w-full rounded-md md:h-[280px] lg:h-[280px]"} alt={""}/>
                                    </div>
                                    <div className={"w-full flex flex-col gap-3"}>
                                        <div className={"flex text-warning items-center gap-1"}>
                                            <h1 className={"lg:text-xl font-bold"}><FaCalendarAlt/></h1>
                                            <h1 className={"lg:text-xl font-bold"}>{item['date']}</h1>
                                        </div>
                                        <h2 className={"lg:text-3xl font-bold uppercase"}>{item['title']}</h2>
                                        <p className={"text-gray-600 text-sm lg:text-md"}>
                                            {
                                                item['des'].slice(0, 195)
                                            }
                                            <span className={"text-neutral text-lg font-semibold"}>
                                              ...See More
                                           </span>
                                        </p>

                                    </div>
                                </Link>
                            )
                        })
                    }
                    <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={visitAllEvent}
                        className={"bg-neutral bg-opacity-10 hover:bg-opacity-20 text-md lg:text-lg mx-auto px-5 lg:px-8 " +
                        "py-3 lg:py-4 rounded-lg font-semibold"}>All Events</motion.button>
                </div>

            </section>
        );
    }


};

export default Events;