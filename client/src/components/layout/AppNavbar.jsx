import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {ExternalLink} from "react-external-link";
import icon from "../../assets/images/icon.png"
import { Divide as Hamburger } from 'hamburger-react'

const AppNavbar = () => {

    const navList = (
        <>
            <li>
                <ExternalLink
                    href='https://saadatcollege.gov.bd/'
                    className={"text-sm  font-semibold"}
                    target="_blank"
                >
                    GSC_HOME
                </ExternalLink>
            </li>
            <li>
                <NavLink
                    to={"/"}
                    className={({isActive}) =>
                        isActive
                            ? "font-semibold underline text-primary  text-sm"
                            : "text-sm"
                    }
                >
                    HOME
                </NavLink>
            </li>
            <li>
                {
                    <NavLink
                        to={"/members"}
                        className={({isActive}) =>
                            isActive
                                ? "font-semibold text-primary underline text-sm"
                                : "text-sm"
                        }
                    >
                        DEP. MEMBERS
                    </NavLink>
                }
            </li>
            <li>
                {
                    <NavLink
                        to={"/students"}
                        className={({isActive}) =>
                            isActive
                                ? "font-semibold text-primary underline text-sm"
                                : "text-sm"
                        }
                    >
                        STUDENTS
                    </NavLink>
                }
            </li>
            <li>
                {
                    <NavLink
                        to={"/about"}
                        className={({isActive}) =>
                            isActive
                                ? "font-semibold text-primary underline text-sm"
                                : "text-sm"
                        }
                    >
                        ABOUT_US
                    </NavLink>
                }
            </li>
            <li>
                <NavLink
                    to={"/contact"}
                    className={({isActive}) =>
                        isActive
                            ? "font-semibold  text-primary underline text-sm"
                            : "text-sm"
                    }
                >
                    CONTACT
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar z-40 top-0 bg-base-100 h-20 max-w-screen-2xl shadow-xl fixed">
            <div className="navbar-start">
                <details className="dropdown lg:hidden">
                    <summary className="m-1 border-none btn">
                        <Hamburger size={20} rounded easing="ease-in"/>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </details>
                <Link>
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