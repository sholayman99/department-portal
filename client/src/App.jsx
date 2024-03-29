import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StudentPage from "./pages/StudentPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import DepMemberPage from "./pages/DepMemberPage.jsx";
import EventDetailsPage from "./pages/EventDetailsPage.jsx";
import AllEventsPage from "./pages/AllEventsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import OtpPage from "./pages/OtpPage.jsx";
import StudentProfilePage from "./pages/StudentProfilePage.jsx";
import TeacherProfilePage from "./pages/TeacherProfilePage.jsx";
import StaffProfilePage from "./pages/StaffProfilePage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import CookiePolicyPage from "./pages/CookiePolicyPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import FacilityPage from "./pages/FacilityPage.jsx";
import NoticePage from "./pages/NoticePage.jsx";
import NoticeDetailPage from "./pages/NoticeDetailPage.jsx";


const App = () => {


    return (
        <div className={"max-w-[1400px] font-roboto bg-[#EAEAEA] mx-auto"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <HomePage/> } />
                    <Route path={"/students"} element={ <StudentPage/> } />
                    <Route path={"/members"} element={ <DepMemberPage/> } />
                    <Route path={"/about"} element={ <AboutPage/> } />
                    <Route path={"/notices"} element={ <NoticePage/> } />
                    <Route path={"/notice-details/:id"} element={ <NoticeDetailPage/> } />
                    <Route path={"/contact"} element={ <ContactPage/> } />
                    <Route path={"/all-events"} element={ <AllEventsPage/> } />
                    <Route path={"/event-details/:id"} element={ <EventDetailsPage/> } />
                    <Route path={"/login"} element={ <LoginPage/> } />
                    <Route path={"/create-account"} element={ <CreateAccountPage/> } />
                    <Route path={"/otp-verify"} element={ <OtpPage/> } />
                    <Route path={"/student-profile/:id"} element={<StudentProfilePage /> } />
                    <Route path={"/teacher-profile/:id"} element={<TeacherProfilePage /> } />
                    <Route path={"/staff-profile/:id"} element={<StaffProfilePage /> } />
                    <Route path={"/privacy-policy"} element={<PrivacyPage /> } />
                    <Route path={"/cookie-policy"} element={<CookiePolicyPage /> } />
                    <Route path={"/terms"} element={<TermsPage /> } />
                    <Route path={"/faq"} element={<FaqPage /> } />
                    <Route path={"/facility"} element={<FacilityPage /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;