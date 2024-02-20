import React from 'react';
import NoticeSkeleton from "../../skeleton/Notice-Skeleton.jsx";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import noticeStore from "../../store/noticeStore.js";

const Notices = () => {
    const {noticeList} = noticeStore();

    if(noticeList === null){
        return <NoticeSkeleton />
    }
    else{
        return (
            <section className="lg:p-10 p-5 flex flex-col items-start justify-center gap-4">
                <div className={"flex items-center gap-2"}>
                    <div className={"h-4 md:h-6 lg:h-8 w-[2px] bg-neutral"}></div>
                    <motion.h2 initial={{x: -100}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}
                               className="lg:text-[2.5rem] md:text-[1.8rem] uppercase text-[1.3rem] font-bold text-primary ">
                        Notices
                    </motion.h2>
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"}>

                    {
                        noticeList.map((item, i) => {
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
            </section>
        );
    }
};

export default Notices;