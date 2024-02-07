import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import otherStore from "../store/otherStore.js";
import Slider from "../components/home/Slider.jsx";
import Message from "../components/home/Message.jsx";
import AcademicProgrammes from "../components/home/AcademicProgrammes.jsx";
import Events from "../components/home/Events.jsx";
import eventStore from "../store/eventStore.js";


const HomePage = () => {

    const {sliderListRequest,messageListRequest,programmeListRequest} = otherStore();
    const {eventListRequest} = eventStore();

    useEffect(() => {
        (async()=>{
            await sliderListRequest();
            await messageListRequest();
            await programmeListRequest();
            await eventListRequest();
        })()
    }, []);

    return (
        <Layout>
            <Slider />
            <Message />
            <AcademicProgrammes />
            <Events />
        </Layout>
    );
};

export default HomePage;