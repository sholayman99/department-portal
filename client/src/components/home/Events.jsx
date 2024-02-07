import React from 'react';
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import eventStore from "../../store/eventStore.js";
import Event from "../shared/Event.jsx";
import AllEventSkeleton from "../../skeleton/All-Event-Skeleton.jsx";

const Events = () => {

    const {eventList} = eventStore();
    const navigate = useNavigate();

    const visitAllEvent =()=>{
        navigate("/all-events")
    }
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
                        eventList === null ? (<AllEventSkeleton/>) : (
                            eventList.slice(0, 2).map((item, i) => {
                                return (
                                    <Event item={item} key={i}/>
                                )
                            })
                        )
                    }
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                                   transition={{type: "spring", stiffness: 400, damping: 17}}
                                   onClick={visitAllEvent}
                                   className={"bg-neutral bg-opacity-10 hover:bg-opacity-20 text-md lg:text-lg mx-auto px-5 lg:px-8 " +
                                       "py-3 lg:py-4 rounded-lg font-semibold"}>All Events
                    </motion.button>

                </div>

            </section>
    );
};

export default Events;