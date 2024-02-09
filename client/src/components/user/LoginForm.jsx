import React from 'react';
import loginVec from "../../assets/images/login.jpg"
import {Link, useNavigate} from "react-router-dom";
import userStore from "../../store/userStore.js";
import LoginSubmitBtn from "./LoginSubmitBtn.jsx";
import ValidationHelper from "../../helper/validationHelper.js";
import toast from "react-hot-toast";
import validationHelper from "../../helper/validationHelper.js";

const LoginForm = () => {

   const {loginFormValue,loginValueOnChange,userLoginRequest} = userStore();
   const navigate = useNavigate();

    const onFormSubmit = async ()=>{
        if(!validationHelper.isEmail(loginFormValue.email)){
            toast.error("Valid Email Required")
        }
        else if(!validationHelper.isPassword(loginFormValue.password)){
            toast.error("Minimum eight characters, at least one letter and one number")
        }else{
              let res = await userLoginRequest(loginFormValue);
              if(res === true){
                  toast.success("login successfully")
                  navigate("/")
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
                    <p className={"my-4"}>login to access your account</p>
                    <img src={loginVec} alt={""} className={"w-64 rounded-xl"}/>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl">
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Your password" value={loginFormValue.password}
                                   className="input input-bordered input-primary"
                                   onChange={(e)=>loginValueOnChange("password",e.target.value)}
                                   required/>
                        </div>

                        <div className="form-control mt-6">
                          <LoginSubmitBtn onClick={onFormSubmit} />
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

export default LoginForm;