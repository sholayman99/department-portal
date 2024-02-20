import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Background from "../components/shared/Background.jsx";
import otherStore from "../store/otherStore.js";
import AllEventSkeleton from "../skeleton/All-Event-Skeleton.jsx";

const AboutPage = () => {
    const {aboutRequest,about} = otherStore();
    useEffect(() => {
        (async()=>{
            await aboutRequest();
        })()
    }, []);
    return (
        <Layout>
            <Background text={"About us"} link={"/about"} />
            <section>
                {
                    about === null? (<AllEventSkeleton />):(
                    about.map((item,i)=>{
                        return (
                            <div className={"card bg-base-100 lg:p-10 p-5 "} key={i}>
                                <h4 className={"text-md text-primary md:text-lg font-semibold"}>{item['title']}:</h4>
                                <div className={"w-6 h-[2px] bg-neutral"}></div>
                                <p className={"text-gray-800 mt-2"}>{item['des']}</p>
                            </div>
                        )
                    })
                )
                }
            </section>
        </Layout>
    );
};

export default AboutPage;