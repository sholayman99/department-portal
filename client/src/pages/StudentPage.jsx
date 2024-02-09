import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Background from "../components/shared/Background.jsx";
import Students from "../components/student/Students.jsx";
import studentStore from "../store/studentStore.js";
import {motion} from "framer-motion";


const StudentPage = () => {

    const {studentListRequest} = studentStore();

    useEffect(() => {
        (async()=>{
           await studentListRequest();
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Our Students"} link={"students"}/>
            <section>
                <div className={"flex items-center lg:px-10 lg:py-10 p-6 gap-2"}>
                    <div className={"h-4 md:h-6 lg:h-8 w-[2px] bg-neutral"}></div>
                    <motion.h2 initial={{x: -100}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}
                               className="lg:text-[2.5rem] md:text-[1.8rem] uppercase text-[1.3rem] font-bold text-primary ">
                       Student List
                    </motion.h2>
                </div>
                <Students/>
            </section>
        </Layout>
    );
};

export default StudentPage;