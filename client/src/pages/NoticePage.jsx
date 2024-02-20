import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Notices from "../components/notices/Notices.jsx";
import Background from "../components/shared/Background.jsx";
import noticeStore from "../store/noticeStore.js";

const NoticePage = () => {
    const {noticeListRequest} = noticeStore();

    useEffect(() => {
        (async()=>{
            await noticeListRequest();
        })()
    }, []);


    return (
        <Layout>
            <Background text={"ALl Notices"} link={"notices"} />
            <Notices/>
        </Layout>
    );
};

export default NoticePage;