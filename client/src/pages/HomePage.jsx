import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import otherStore from "../store/otherStore.js";
import Slider from "../components/home/Slider.jsx";
import Message from "../components/home/Message.jsx";
import AcademicProgrammes from "../components/home/AcademicProgrammes.jsx";
import Events from "../components/home/Events.jsx";
import eventStore from "../store/eventStore.js";
import DepartmentImages from "../components/home/DepartmentImages.jsx";


const HomePage = () => {

    const {sliderListRequest,messageListRequest,programmeListRequest,imageListRequest,imageList} = otherStore();
    const {eventListRequest} = eventStore();

    useEffect(() => {
        (async()=>{
            await sliderListRequest();
            await messageListRequest();
            await programmeListRequest();
            await eventListRequest();
            await imageListRequest()
        })()
    }, []);

    return (
        <Layout>
            <Slider />
            <Message />
            <AcademicProgrammes />
            <Events />
            <DepartmentImages />
        </Layout>
    );
};

export default HomePage;