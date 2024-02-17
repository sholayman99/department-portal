import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Background from "../components/shared/Background.jsx";
import otherStore from "../store/otherStore.js";
import LegalContext from "../components/shared/LegalContext.jsx";

const CookiePolicyPage = () => {
    const {legalRequest} = otherStore();



    useEffect(() => {
        (async ()=>{
            await legalRequest("cookie");
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Cookie Policy"} link={"/cookie-policy"} />
            <LegalContext />
        </Layout>
    );
};

export default CookiePolicyPage;