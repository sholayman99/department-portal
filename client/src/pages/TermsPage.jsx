import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import otherStore from "../store/otherStore.js";
import Background from "../components/shared/Background.jsx";
import LegalContext from "../components/shared/LegalContext.jsx";

const TermsPage = () => {
    const {legalRequest} = otherStore();



    useEffect(() => {
        (async ()=>{
            await legalRequest("terms");
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Terms Of Use"} link={"/terms"} />
            <LegalContext />
        </Layout>
    );
};

export default TermsPage;