import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import teacherStore from "../store/teacherStore.js";
import Teachers from "../components/depMembers/Teachers.jsx";
import Background from "../components/shared/Background.jsx";
import {motion} from "framer-motion";

const DepMemberPage = () => {

    const {teacherListRequest} = teacherStore();

    useEffect(() => {
        (async()=>{
           await teacherListRequest()
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Department Members"} />
            <section>
                <div className={"flex items-center lg:p-10 p-6 gap-3"}>
                    <div className={"h-6 md:h-10 lg:h-12 w-[1px] bg-neutral"}></div>
                    <motion.h2 initial={{x: -100}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}
                               className="lg:text-[2.5rem] md:text-[2rem] uppercase text-[1.3rem] font-[sans-serif]
                         font-bold text-primary ">
                        Teachers List
                    </motion.h2>
                </div>
                <Teachers/>
            </section>
        </Layout>
    );
};

export default DepMemberPage;