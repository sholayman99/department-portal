import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import otherStore from "../store/otherStore.js";
import Slider from "../components/home/Slider.jsx";


const HomePage = () => {

    const {sliderListRequest} = otherStore();

    useEffect(() => {
        (async()=>{
            await sliderListRequest();
        })()
    }, []);

    return (
        <Layout>
            <Slider />
        </Layout>
    );
};

export default HomePage;