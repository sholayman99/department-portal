import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import StaffProfile from "../components/depMembers/StaffProfile.jsx";
import staffStore from "../store/staffStore.js";
import {useParams} from "react-router-dom";

const StaffProfilePage = () => {

    const {staffDetailsRequest} = staffStore();
    const {id} = useParams()

    useEffect(() => {
        (async()=>{
            await staffDetailsRequest(id)
        })()
    }, []);

    return (
        <Layout>
           <StaffProfile />
        </Layout>
    );
};

export default StaffProfilePage;