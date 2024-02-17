import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import otherStore from "../store/otherStore.js";
import Background from "../components/shared/Background.jsx";
import LegalContext from "../components/shared/LegalContext.jsx";

const PrivacyPage = () => {
    const {legalRequest} = otherStore();


    useEffect(() => {
        (async ()=>{
            await legalRequest("privacy");
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Privacy Policy"} link={"/privacy-policy"} />
            <LegalContext />
        </Layout>
    );
};

export default PrivacyPage;