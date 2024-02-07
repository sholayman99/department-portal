import React from 'react';
import event from "../../assets/images/event.jpg";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";

const Background = ({text}) => {
    return (
        <section className="hero mt-20 h-[40vh] bg-cover bg-no-repeat lg:h-[60vh]"
                 style={{backgroundImage: `url(${event})`}}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-base-100">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">{text}</h1>
                    <div className={"w-60 my-3 rounded h-[1px] bg-[rgba(255,255,255,0.20)]"}></div>
                    <div className="text-md text-gray-400 flex items-center justify-center breadcrumbs">
                        <ul>
                            <li><Link to={"/"}> <FaHome/>Home</Link></li>
                            <li><Link to={"/all-events"}>{text}</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Background;