import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import StudentProfile from "../components/student/StudentProfile.jsx";
import studentStore from "../store/studentStore.js";
import {useParams} from "react-router-dom";

const StudentProfilePage = () => {

    const {studentDetailsRequest} = studentStore();
    const id = useParams();

    useEffect(() => {
        (async()=>{
            await studentDetailsRequest(id)
        })()
    }, []);

    return (
        <Layout>
            <StudentProfile />
        </Layout>
    );
};

export default StudentProfilePage;