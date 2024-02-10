import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import register from "../../assets/images/register.jpg";
import {motion} from "framer-motion";
import SubmitBtn from "./SubmitBtn.jsx";
import userStore from "../../store/userStore.js";
import validationHelper from "../../helper/validationHelper.js";
import toast from "react-hot-toast";


const CreateAccountForm = () => {
    const navigate = useNavigate();
    const {accountFormValue,userAccountCreateRequest,accountFormOnChange} = userStore();

    const onFormSubmit = async ()=>{
        if( validationHelper.isEmpty(accountFormValue.email) && !validationHelper.isEmail(accountFormValue.email)){
            toast.error("Valid Email Required")
        }
        else if(validationHelper.isEmpty(accountFormValue.email) && !validationHelper.isPassword(accountFormValue.password)){
            toast.error("Minimum eight characters, at least one letter and one number")
        }else{
            let res = await userAccountCreateRequest(accountFormValue);
            if(res === true){
                toast.success("6 digit otp has been sent");
                navigate("/otp-verify");
                accountFormValue.email="";
                accountFormValue.password="";

            }else{
                toast.error("Something went wrong!");
            }
        }
    }

    return (
        <section className={"lg:min-h-screen min-h-[80vh] flex items-center bg-base-100 justify-center"}>

            <div
                className={"flex  flex-col-reverse lg:pt-20 lg:flex-row-reverse items-center justify-center gap-10 lg:gap-20"}>
                <div className={"text-start gap-3 hidden lg:block"}>
                    <div>
                        <h1 className={"lg:text-4xl text-2xl font-bold"}>Welcome to</h1>
                        <h1 className={"lg:text-4xl text-2xl"}>Department of chemistry</h1>
                    </div>
                    <p className={"my-4"}>Login to access your account</p>
                    <img src={register} alt={""} className={"w-64 rounded-xl"}/>
                </div>
                <motion.div whileHover={{scale: 1.1}} transition={{type: "spring", stiffness: 400, damping: 17}}
                            className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">LOGIN</h2>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" value={accountFormValue.email}
                                   className="input input-bordered input-primary"
                                   onChange={(e) => accountFormOnChange("email", e.target.value)}
                                   required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Your password" value={accountFormValue.password}
                                   className="input input-bordered input-primary"
                                   onChange={(e) => accountFormOnChange("password", e.target.value)}
                                   required/>
                        </div>

                        <div className="form-control mt-6">
                            <SubmitBtn onClick={onFormSubmit} text={"Next"}/>
                        </div>
                        <div className="form-control my-6">
                            <p>Don't have an account?
                                <Link to={"/login"} className={"font-bold hover:text-primary hover:underline"}>
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>


        </section>
    );
};

export default CreateAccountForm;