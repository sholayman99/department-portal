import React from 'react';
import staffStore from "../../store/staffStore.js";
import MemberSkeleton from "../../skeleton/Member-Skeleton.jsx";
import {Link} from "react-router-dom";


const Staffs = () => {

    const {staffList} = staffStore();

    if(staffList === null){
        return <MemberSkeleton />
    }else {
        return (
            <section className={"grid grid-cols-1 md:grid-cols-2 lg:px-16 px-6 pb-5 lg:grid-cols-3 gap-10"}>
                {
                    staffList.map((item,i)=>{
                        return(
                            <Link to={"/profile"} key={i} className={"bg-base-100 rounded-lg flex flex-col " +
                                "items-center gap-4 hover:scale-105 transition duration-500 ease-in-out"}>
                                <div className="avatar">
                                    <div className="lg:w-48 hover:border-2 border-secondary my-2 md:w-40 w-32 rounded-full">
                                        <img src={item['avatar']} alt={""}/>
                                    </div>
                                </div>
                                <div className={"bg-secondary text-center p-5 w-full"}>
                                    <h1 className={"text-base-100 text-xl font-[600]"}>{item['staffName']}</h1>
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

export default Staffs;