import React from 'react';
import MemberSkeleton from "../../skeleton/Member-Skeleton.jsx";
import teacherStore from "../../store/teacherStore.js";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Teachers = () => {

    const {teacherList} = teacherStore();

    if(teacherList===null){
        return <MemberSkeleton />
    }else{
        return (
            <section className={"grid grid-cols-1 md:grid-cols-2 lg:px-16 px-6 lg:grid-cols-3 gap-10"}>
                {
                    teacherList.map((item,i)=>{
                        return(
                            <Link to={"/profile"} key={i} className={"bg-base-100 rounded-lg flex flex-col " +
                                "items-center gap-4 hover:scale-105 transition duration-500 ease-in-out"}>
                                {
                                    item['title'] ? (<h3 className={"text-xl p-5 font-[600]"}>{item['title']}</h3>) :
                                        <h3 className={"text-xl p-5 font-[500]"}>Teacher</h3>
                                }
                                <div className="avatar">
                                    <div className="lg:w-48 hover:border-2 border-secondary md:w-40 w-32 rounded-full">
                                        <img src={item['avatar']} alt={""}/>
                                    </div>
                                </div>
                                <div className={"bg-secondary text-center p-5 w-full"}>
                                    <h1 className={"text-base-100 text-xl font-[600]"}>{item['teacherName']}</h1>
                                    <h4 className={"text-warning text-md font-[500] uppercase"}>{item['designation']}</h4>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        );
    }
};

export default Teachers;