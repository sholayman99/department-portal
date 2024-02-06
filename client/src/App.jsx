import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StudentPage from "./pages/StudentPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import DepMemberPage from "./pages/DepMemberPage.jsx";
import EventDetailsPage from "./pages/EventDetailsPage.jsx";
import AllEventsPage from "./pages/AllEventsPage.jsx";

const App = () => {
    return (
        <div className={"max-w-[1400px] font-roboto bg-[#EAEAEA] mx-auto"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <HomePage/> } />
                    <Route path={"/students"} element={ <StudentPage/> } />
                    <Route path={"/members"} element={ <DepMemberPage/> } />
                    <Route path={"/about"} element={ <AboutPage/> } />
                    <Route path={"/contact"} element={ <ContactPage/> } />
                    <Route path={"/all-events"} element={ <AllEventsPage/> } />
                    <Route path={"/event-details/:id"} element={ <EventDetailsPage/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;