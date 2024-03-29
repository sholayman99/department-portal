import React from 'react';
import icon from "../../assets/images/icon.png"
import {Link, NavLink, useNavigate} from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react'
import {ExternalLink} from "react-external-link";
import userStore from "../../store/userStore.js";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const AppNavbar = () => {
    const navigate = useNavigate();
    const {isLogin,userLogoutRequest} = userStore();

    const onLogout = async()=>{
       let res = await userLogoutRequest();
       if(res===true){
           sessionStorage.clear();
           localStorage.clear();
           Cookies.remove('token');
           navigate("/login");
           toast.success("Logout successfully");
       }
    }

    const navList = (
        <>
            <li>
                <ExternalLink href='https://saadatcollege.gov.bd/' className={"text-md  font-semibold"}
                              target="_blank"> GSC_HOME </ExternalLink>
            </li>
            <li>
                <NavLink to={"/"} className={({isActive}) => isActive ? "font-semibold" +
                    " underline text-primary text-md" : "text-md"}>HOME</NavLink>
            </li>
            <li>
                <NavLink to={"/members"} className={({isActive}) => isActive ? "font-semibold" +
                    " underline text-primary text-md" : "text-md"}>DEP_MEMBERS</NavLink>
            </li>
            <li>
                <NavLink to={"/students"} className={({isActive}) => isActive ? "font-semibold" +
                    " underline text-primary text-md" : "text-md"}>STUDENTS</NavLink>
            </li>
            <li>
                <NavLink to={"/notices"} className={({isActive}) => isActive ? "font-semibold" +
                    " underline text-primary text-md" : "text-md"}>NOTICES</NavLink>
            </li>
            <li>
                <NavLink to={"/all-events"} className={({isActive}) => isActive ? "font-semibold" +
                    " underline text-primary text-md" : "text-md"}>EVENTS</NavLink>
            </li>
            <li>
                <NavLink to={"/about"} className={({isActive}) => isActive ? "font-semibold" +
                    " underline text-primary text-md" : "text-md"}>ABOUT</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"} className={({isActive}) => isActive ? "font-semibold" +
                    " underline text-primary text-md" : "text-md"}>CONTACT</NavLink>
            </li>
            <li>
                {
                    isLogin() ? (<button onClick={onLogout}
                                         className={'shadow-lg  border border-primary ' +
                                             ' hover:scale-105 transition ease-in-out delay-150 '}>
                                LOGOUT
                            </button>
                        ) :
                        (
                            <NavLink to={"/login"} className={({isActive}) => isActive ?
                                "font-semibold bg-neutral text-base-100 underline shadow-lg" +
                                "hover:scale-105 transition ease-in-out delay-150 hover:bg-gray-800"
                                :
                                "bg-neutral text-base-100 shadow-lg" +
                                " hover:scale-105 transition ease-in-out delay-150 hover:bg-gray-800"}
                            >LOGIN</NavLink>
                        )
                }
            </li>
        </>
    );

    return (
        <div className="navbar z-40 top-0 r-0 bg-base-100 h-20 max-w-[1400px] shadow-xl fixed">
            <div className="navbar-start">
                <details className="dropdown lg:hidden">
                    <summary className="m-1 border-none btn">
                        <Hamburger size={20} rounded easing="ease-in"/>
                    </summary>
                    <ul className=" rounded-b mt-[11px] p-3 shadow menu dropdown-content z-50 bg-base-100  w-52 md:w-60">
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