import React, {useEffect} from 'react';
import event from "../assets/images/event.jpg"
import Layout from "../components/layout/Layout.jsx";
import {FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";
import otherStore from "../store/otherStore.js";
import AllEventSkeleton from "../skeleton/All-Event-Skeleton.jsx";
import AllEvent from "../components/allEvent/AllEvent.jsx";

const AllEventsPage = () => {

    const {eventListRequest} = otherStore();

    useEffect(() => {
        (async()=>{
            await eventListRequest();
        })()
    }, []);


       return (
           <Layout>
               <main>
                   <section className="hero mt-20 h-[40vh] bg-cover bg-no-repeat lg:h-[60vh]"
                            style={{backgroundImage: `url(${event})`}}>
                       <div className="hero-overlay bg-opacity-50"></div>
                       <div className="hero-content text-center text-base-100">
                           <div className="max-w-md">
                               <h1 className="text-4xl font-bold">Events</h1>
                               <div className={"w-60 my-3 rounded h-[1px] bg-[rgba(255,255,255,0.20)]"}></div>
                               <div className="text-md text-gray-400 flex items-center justify-center breadcrumbs">
                                   <ul>
                                       <li><Link to={"/"}> <FaHome/>Home</Link></li>
                                       <li><Link to={"/all-events"}>All Events</Link></li>
                                   </ul>
                               </div>

                           </div>
                       </div>
                   </section>
                   <AllEvent />
               </main>
           </Layout>
       );

};

export default AllEventsPage;