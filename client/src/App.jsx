import React from 'react';
import {Button} from "keep-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StudentPage from "./pages/StudentPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MemberPage from "./pages/MemberPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const App = () => {
    return (
        <div className={"max-w-[1200px]"}>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={ <HomePage/> } />
                  <Route path={"/students"} element={ <StudentPage/> } />
                  <Route path={"/members"} element={ <MemberPage/> } />
                  <Route path={"/about"} element={ <AboutPage/> } />
                  <Route path={"/contact"} element={ <ContactPage/> } />
              </Routes>
          </BrowserRouter>
        </div>
    );
};

export default App;