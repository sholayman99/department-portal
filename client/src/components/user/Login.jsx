import React from 'react';
import loginVec from "../../assets/images/login.jpg"
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import { FaEye } from "react-icons/fa";

const Login = () => {



    return (
        <section className={"min-h-screen my-10 flex items-center bg-base-100 justify-center"}>

            <div className={"flex flex-col lg:flex-row-reverse items-center justify-center gap-20"}>
                <div className={"flex flex-col gap-3"}>
                    <div>
                        <h1 className={"text-4xl font-bold"}>Welcome to</h1>
                        <h1 className={"text-4xl"}>Department of chemistry</h1>
                    </div>
                    <p>login to access your account</p>
                    <img src={loginVec} alt={""} className={"w-64 rounded-xl"}/>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">LOGIN</h2>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" className="input input-bordered input-primary"
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your password"
                                   className="input input-bordered input-primary"
                                   required/>
                        </div>
                        <span className="flex items-start">show pass</span>
                        <div className="form-control mt-6">
                            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                                           transition={{type: "spring", stiffness: 400, damping: 17}}
                                           className="btn btn-primary">Login
                            </motion.button>
                        </div>
                        <div className="form-control my-6">
                            <p>Don't have an account?
                                <Link to={"/create-account"} className={"font-bold hover:text-primary"}>
                                    Create Account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Login;