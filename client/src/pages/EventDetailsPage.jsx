import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import eventStore from "../store/eventStore.js";
import Background from "../components/shared/Background.jsx";
import Layout from "../components/layout/Layout.jsx";
import AllEventSkeleton from "../skeleton/All-Event-Skeleton.jsx";
import {FaCalendarAlt} from "react-icons/fa";

const EventDetailsPage = () => {
    const {eventDetailsRequest,eventDetails} = eventStore()
    const {id} = useParams();

    useEffect(() => {
        (async()=>{
          await  eventDetailsRequest(id);
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Event Details"} />
            <section className={"lg:p-16 p-6 flex items-center justify-center"}>
                {
                    eventDetails === null ? (<AllEventSkeleton />):(
                        <div className={" flex flex-col gap-6 lg:gap-10"}>
                            <div>
                                <h1 className={"text-xl md:text-2xl lg:text-3xl uppercase text-secondary font-semibold"}>
                                    {eventDetails.event['title']}
                                </h1>
                                <div className={"flex text-warning items-center gap-1"}>
                                    <h4 className={"lg:text-2xl md:text-xl font-bold"}><FaCalendarAlt/></h4>
                                    <h4 className={"lg:text-2xl md:text-xl font-bold"}>
                                        {eventDetails.event['date']}
                                    </h4>
                                </div>
                            </div>
                            <h4 className={"text-lg md:text-xl  lg:text-2xl font-semibold"}>
                                Host:<span className={"text-primary"}> {eventDetails['host']}</span>
                            </h4>
                            <img className={"w-full rounded-lg h-[30vh] lg:h-[75vh] "} src={eventDetails.event['img']} alt={""}/>
                            <p className={"text-sm md:text-md lg:text-lg text-gray-500"}>{eventDetails['details']}</p>

                        </div>
                    )
                }
            </section>
        </Layout>
    );
};

export default EventDetailsPage;