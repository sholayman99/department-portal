import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Details from "../components/notices/Details.jsx";
import Background from "../components/shared/Background.jsx";
import {useParams} from "react-router-dom";
import noticeStore from "../store/noticeStore.js";

const NoticeDetailPage = () => {
    const {noticeDetailsRequest} = noticeStore();
    const {id} = useParams();

    useEffect(() => {
        (async()=>{
            await noticeDetailsRequest(id);
        })()
    }, []);

    return (
        <Layout>
            <Background text={"Notice Details"} />
            <Details />
        </Layout>
    );
};

export default NoticeDetailPage;