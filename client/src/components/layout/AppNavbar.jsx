import React from 'react';
import icon from "../../assets/images/icon.png"
import {Link, NavLink} from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react'
import {ExternalLink} from "react-external-link";

const AppNavbar = () => {
    const navList = (
        <>
            <li>
                <ExternalLink href='https://saadatcollege.gov.bd/' className={"text-md  font-semibold"}
                              target="_blank"> GSC_HOME </ExternalLink>
            </li>
            <li>
                <NavLink to={"/"} className={({isActive}) => isActive?"font-semibold"+
                    " underline text-primary text-md":"text-md"}>HOME</NavLink>
            </li>
            <li>
                <NavLink to={"/members"} className={({isActive}) => isActive?"font-semibold"+
                    " underline text-primary text-md" :"text-md"}>DEP_MEMBERS</NavLink>
            </li>
            <li>
                <NavLink to={"/students"} className={({isActive}) => isActive?"font-semibold"+
                    " underline text-primary text-md":"text-md"}>STUDENTS</NavLink>
            </li>
            <li>
                <NavLink to={"/about"} className={({isActive}) => isActive?"font-semibold"+
                    " underline text-primary text-md" : "text-md"}>ABOUT</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"} className={({isActive}) => isActive?"font-semibold"+
                    " underline text-primary text-md" : "text-md"}>CONTACT</NavLink>
            </li>

        </>
    );

    return (
        <div className="navbar z-40 top-0 r-0 bg-base-100 h-20 w-full shadow-xl fixed">
            <div className="navbar-start">
                <details className="dropdown lg:hidden">
                    <summary className="m-1 border-none btn">
                        <Hamburger size={20} rounded easing="ease-in"/>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </details>
                <Link to={"/"}>
                    <div className="lg:w-56 w-40 md:w-56 flex items-center justify-center">
                        <img className="" alt={""} src={icon} />
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navList}</ul>

            </div>
        </div>
    );
};

export default AppNavbar;