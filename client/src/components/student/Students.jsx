import React from 'react';
import studentStore from "../../store/studentStore.js";
import StudentSkeleton from "../../skeleton/Student-Skeleton.jsx";
import {Link} from "react-router-dom";

const Students = ({student}) => {

    const {studentList} = studentStore();

    if(studentList === null){
        return   <StudentSkeleton />
    }
    else{
        return (
            <section className={"grid grid-cols-1 md:grid-cols-3 lg:px-10 px-6 pb-5 lg:grid-cols-4 gap-10"}>
                {
                    studentList.map((item, i) => {
                        return (
                            <Link to={`/student-profile/${item['_id']}`} key={i} className={"bg-base-100 rounded-lg flex flex-col " +
                                "items-center gap-4 hover:scale-105 transition duration-500 ease-in-out"}>
                                <div className="avatar">
                                    <div className="lg:w-36 hover:border-2 border-secondary md:w-36 w-24 my-2  rounded-full">
                                        <img src={item['avatar']} alt={""}/>
                                    </div>
                                </div>
                                <div className={"bg-secondary text-base-100 text-center p-5 w-full"}>
                                    <h1 className={"text-xl font-[600]"}>{item['studentName']}</h1>
                                    <h4 className={" text-md font-[500]"}>
                                        Session : <span className={"text-warning"}>{item['session']}</span>
                                    </h4>
                                    <h4 className={" text-md font-[500] uppercase"}>
                                        Year : <span className={"text-warning"}>{item['year']}</span>
                                    </h4>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        );
    }
};

export default Students;