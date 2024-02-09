import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import teacherStore from "../store/teacherStore.js";
import Teachers from "../components/depMembers/Teachers.jsx";
import Background from "../components/shared/Background.jsx";
import {motion} from "framer-motion";
import Staffs from "../components/depMembers/Staffs.jsx";
import staffStore from "../store/staffStore.js";

const DepMemberPage = () => {

    const {teacherListRequest} = teacherStore();
    const {staffListRequest} = staffStore();

    useEffect(() => {
        (async()=>{
           await teacherListRequest();
           await staffListRequest();
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Department Members"}/>
            <section>
                <div className={"flex items-center lg:px-10 lg:py-10 p-6 gap-3"}>
                    <div className={"h-4 md:h-6 lg:h-8 w-[2px] bg-neutral"}></div>
                    <motion.h2 initial={{x: -100}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}
                               className="lg:text-[2.5rem] md:text-[1.8rem] uppercase text-[1.3rem] font-bold text-primary ">
                        Teachers List
                    </motion.h2>
                </div>
                <Teachers/>
            </section>
            <section>
                <div className={"flex items-center lg:px-10 lg:py-10 p-6 gap-3"}>
                    <div className={"h-4 md:h-6 lg:h-8 w-[2px] bg-neutral"}></div>
                    <motion.h2 initial={{x: -100}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}
                               className="lg:text-[2.5rem] md:text-[1.8rem] uppercase text-[1.3rem] font-bold text-primary ">
                        Staff List
                    </motion.h2>
                </div>
                <Staffs/>
            </section>
        </Layout>
    );
};

export default DepMemberPage;