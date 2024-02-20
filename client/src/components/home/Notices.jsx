import React from 'react';
import noticeStore from "../../store/noticeStore.js";
import NoticeSkeleton from "../../skeleton/Notice-Skeleton.jsx";
import {motion} from "framer-motion";
import AllEventSkeleton from "../../skeleton/All-Event-Skeleton.jsx";
import Event from "../shared/Event.jsx";
import {Link, useNavigate} from "react-router-dom";


const Notices = () => {

    const {noticeList} = noticeStore();
    const navigate = useNavigate();

    const handleNoticePage =()=>{
        navigate('/notices');
    }

    if(noticeList === null){
        return <NoticeSkeleton />
    }
    else{
        return (
            <section className="py-5 flex flex-col items-center justify-center gap-2">
                <div className="lg:py-10 py-6 flex items-center justify-center flex-col">
                    <motion.h2 initial={{x: -250}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}
                               className="lg:text-[2.5rem] md:text-[2rem] uppercase text-[1.3rem] font-[sans-serif]
                         font-bold text-primary ">
                        Notices
                    </motion.h2>
                    <div className="lg:w-20  w-12 h-[2px] bg-neutral rounded"></div>
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10"}>

                    {
                        noticeList.slice(0, 3).map((item, i) => {
                            return (
                                <Link to={`/notice-details/${item['_id']}`} key={i} className="bg-base-100 text-neutral border-neutral
                                 hover:border-2 hover:scale-y-105 transition duration-500 ease-in-out rounded-lg">
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-warning">{item['date']}</h2>
                                        <h2 className="card-title uppercase text-lg">
                                            {item['title'].slice(0, 25)}<span>...</span>
                                        </h2>
                                        <p className={"text-gray-700 text-md"}>
                                            {
                                                item['des'].slice(0, 60)
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

                </div>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                               transition={{type: "spring", stiffness: 400, damping: 17}}
                               onClick={handleNoticePage}
                               className={"bg-neutral bg-opacity-10 hover:bg-opacity-20 text-md lg:text-lg px-5 lg:px-8 " +
                                   "py-3 lg:py-4 rounded-lg font-semibold mt-8"}>All Notices
                </motion.button>

            </section>
        );
    }
};

export default Notices;