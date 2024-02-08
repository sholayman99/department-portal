import React from 'react';
import eventStore from "../../store/eventStore.js";
import {Link} from "react-router-dom";
import {FaCalendarAlt} from "react-icons/fa";

const Event = ({item}) => {

    return (
        <>
            <Link to={`/event-details/${item['_id']}`}
                  className="flex lg:p-5 md:p-5 p-2.5 lg:flex-row flex-col border-neutral
                               rounded-md items-start justify-between gap-10 bg-base-100 hover:border-2
                                hover:scale-y-105 transition duration-500 ease-in-out">
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
                    <p className={"text-gray-600 text-md lg:text-md"}>
                                    {
                                        item['des'].slice(0, 195)
                                    }
                                    <span className={"text-neutral text-lg font-semibold"}>
                                        ...See More
                                    </span>
                    </p>

                </div>
            </Link>
        </>
    );
};

export default Event;