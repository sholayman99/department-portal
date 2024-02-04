import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StudentPage from "./pages/StudentPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import DepMemberPage from "./pages/DepMemberPage.jsx";

const App = () => {
    return (
        <div className={"max-w-[1440px]"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <HomePage/> } />
                    <Route path={"/students"} element={ <StudentPage/> } />
                    <Route path={"/members"} element={ <DepMemberPage/> } />
                    <Route path={"/about"} element={ <AboutPage/> } />
                    <Route path={"/contact"} element={ <ContactPage/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;