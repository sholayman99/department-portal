import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import otherStore from "../store/otherStore.js";
import Background from "../components/shared/Background.jsx";
import LegalContext from "../components/shared/LegalContext.jsx";

const FacilityPage = () => {
    const {legalRequest} = otherStore();



    useEffect(() => {
        (async ()=>{
            await legalRequest("facility");
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Facilities"} link={"/facility"} />
            <LegalContext />
        </Layout>
    );
};

export default FacilityPage;