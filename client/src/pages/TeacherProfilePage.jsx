import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import TeacherProfile from "../components/depMembers/TeacherProfile.jsx";
import {useParams} from "react-router-dom";
import teacherStore from "../store/teacherStore.js";

const TeacherProfilePage = () => {

    const {teacherDetailsRequest} = teacherStore();
    const {id} = useParams();

    useEffect(() => {
        (async()=>{
            await teacherDetailsRequest(id);
        })()
    }, []);

    return (
        <Layout>
            <TeacherProfile />
        </Layout>
    );
};

export default TeacherProfilePage;