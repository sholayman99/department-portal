import React, {useEffect} from 'react';
import event from "../assets/images/event.jpg"
import Layout from "../components/layout/Layout.jsx";
import {FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";
import eventStore from "../store/eventStore.js";
import Event from "../components/shared/Event.jsx";
import AllEventSkeleton from "../skeleton/All-Event-Skeleton.jsx";
import Background from "../components/shared/Background.jsx";

const AllEventsPage = () => {

    const {eventListRequest,eventList} = eventStore();

    useEffect(() => {
        (async()=>{
            await eventListRequest();
        })()
    }, []);


       return (
           <Layout>
               <main>
                   <Background text={"All Events"} link={"all-events"} />
                   <section className={"lg:p-10 p-6 grid grid-cols-1 gap-10"}>
                       {
                         eventList === null?( <AllEventSkeleton /> ):
                             (  eventList.map((item, i) => {
                             return (
                                 <Event item={item} key={i}/>
                             )
                         }))
                       }
                   </section>
               </main>
           </Layout>
       );

};

export default AllEventsPage;