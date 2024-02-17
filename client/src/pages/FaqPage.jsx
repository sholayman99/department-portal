import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Background from "../components/shared/Background.jsx";
import otherStore from "../store/otherStore.js";
import LegalContext from "../components/shared/LegalContext.jsx";


const FaqPage = () => {
   const {legalRequest} = otherStore();



    useEffect(() => {
        (async ()=>{
           await legalRequest("faq");
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Faq"} link={"/faq"}/>
            <LegalContext />
        </Layout>
    );
};

export default FaqPage;