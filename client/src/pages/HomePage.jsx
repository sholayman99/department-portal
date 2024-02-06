import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import otherStore from "../store/otherStore.js";
import Slider from "../components/home/Slider.jsx";
import Message from "../components/home/Message.jsx";


const HomePage = () => {

    const {sliderListRequest,messageListRequest} = otherStore();

    useEffect(() => {
        (async()=>{
            await sliderListRequest();
            await messageListRequest();
        })()
    }, []);

    return (
        <Layout>
            <Slider />
            <Message />
        </Layout>
    );
};

export default HomePage;