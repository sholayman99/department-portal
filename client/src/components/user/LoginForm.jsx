import React, {useState} from 'react';
import loginVec from "../../assets/images/login.jpg"
import {Link, useNavigate} from "react-router-dom";
import userStore from "../../store/userStore.js";
import SubmitBtn from "./SubmitBtn.jsx";
import {motion} from "framer-motion";
import toast from "react-hot-toast";
import validationHelper from "../../helper/validationHelper.js";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const LoginForm = () => {

   const {loginFormValue,loginValueOnChange,
       userLoginRequest} = userStore();
   const navigate = useNavigate();
   const [passwordType,setPasswordType] = useState("password");

    const togglePassword =()=>{
        if(passwordType==="password")
        {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const onFormSubmit = async ()=>{
        if(!validationHelper.isEmail(loginFormValue.email)){
            toast.error("Valid Email Required")
        }
        else if(!validationHelper.isPassword(loginFormValue.password)){
            toast.error("Minimum eight characters, at least one letter and one number")
        }else{
              let res = await userLoginRequest(loginFormValue);
              if(res === true){
                  toast.success("login successfully");
                  navigate("/");
                  loginFormValue.email="";
                  loginFormValue.password="";

              }else{
                  toast.error("Something went wrong!");
                  loginFormValue.email="";
                  loginFormValue.password="";
              }
        }
    }

    return (
        <section className={"lg:min-h-screen min-h-[80vh] flex items-center bg-base-100 justify-center"}>

            <div className={"flex  flex-col-reverse lg:pt-20 lg:flex-row-reverse items-center justify-center gap-10 lg:gap-20"}>
                <div className={"text-start gap-3 hidden lg:block"}>
                    <div >
                        <h1 className={"lg:text-4xl text-2xl font-bold"}>Welcome to</h1>
                        <h1 className={"lg:text-4xl text-2xl"}>Department of chemistry</h1>
                    </div>
                    <p className={"my-4"}>Login to access your account</p>
                    <img src={loginVec} alt={""} className={"w-64 rounded-xl"}/>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title">LOGIN</h2>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" value={loginFormValue.email}
                                   className="input input-bordered input-primary"
                                   onChange={(e)=>loginValueOnChange("email",e.target.value)}
                                   required/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordType} placeholder="Your password" value={loginFormValue.password}
                                   className="input input-bordered input-primary"
                                   onChange={(e) => loginValueOnChange("password", e.target.value)}
                                   required/>
                            <div className="input-group-btn absolute right-2 top-11">
                                <button className="btn bg-base-100 hover:bg-base-100 border-none btn-sm"
                                        onClick={togglePassword}>
                                    {passwordType === "password" ? <FaEyeSlash/> :
                                        <FaEye/>}
                                </button>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <SubmitBtn onClick={onFormSubmit} text={"Login"}/>
                        </div>
                        <div className="form-control my-6">
                            <p>Don't have an account?
                                <Link to={"/create-account"} className={"font-bold hover:text-primary hover:underline"}>
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

export default LoginForm;