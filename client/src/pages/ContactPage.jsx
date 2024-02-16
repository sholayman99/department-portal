import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Contact from "../components/contact/Contact.jsx";
import Background from "../components/shared/Background.jsx";
import otherStore from "../store/otherStore.js";

const ContactPage = () => {

    const {contactRequest} = otherStore();

    useEffect(() => {
        (async ()=>{
            await contactRequest();
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Contact us"} link={"/contact"} />
            <Contact />
        </Layout>
    );
};

export default ContactPage;