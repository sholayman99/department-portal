import React from 'react';
import {FaCalendarAlt} from "react-icons/fa";
import noticeStore from "../../store/noticeStore.js";
import DetailSkeleton from "../../skeleton/Detail-Skeleton.jsx";

const Details = () => {
const {noticeDetails} = noticeStore();

if(noticeDetails === null){
    return <DetailSkeleton />
}
else{
    return (
        <section className={"lg:p-16 p-6 flex items-center justify-center"}>
                {
                    noticeDetails === null ? (<DetailSkeleton/>) : (
                        <div className={" flex flex-col gap-6 lg:gap-10"}>
                            <div>
                                <h1 className={"text-xl md:text-2xl lg:text-3xl uppercase text-secondary font-semibold"}>
                                    {noticeDetails['title']}
                                </h1>
                                <div className={"flex text-warning items-center gap-1 my-2"}>
                                    <h4 className={"lg:text-2xl md:text-xl font-bold"}><FaCalendarAlt/></h4>
                                    <h4 className={"lg:text-2xl md:text-xl font-bold"}>
                                        {noticeDetails['date']}
                                    </h4>
                                </div>
                                <h2 className={"text-lg"}><span className={"text-primary"}>Subject: </span>{noticeDetails['sub']}</h2>
                            </div>
                            <p className={"text-sm md:text-md lg:text-lg text-gray-700"}>{noticeDetails['des']}</p>
                        </div>
                    )
                }
        </section>
    );
}
};

export default Details;