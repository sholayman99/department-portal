import React from 'react';
import SubmitBtn from "./SubmitBtn.jsx";
import userStore from "../../store/userStore.js";
import {useNavigate} from "react-router-dom";
import {motion} from 'framer-motion';
import validationHelper from "../../helper/validationHelper.js";
import toast from "react-hot-toast";

const OtpForm = () => {
    const {otpFormValue,otpFormOnChange,userVerifyRequest} = userStore();
    const navigate = useNavigate();

    const onFormSubmit = async()=>{

        if(validationHelper.isEmpty(otpFormValue) && !validationHelper.isNumber(otpFormValue) && validationHelper.isNull(otpFormValue) ){
            toast.error("Otp must be a number")
        }else{
            let res = await userVerifyRequest(otpFormValue);
            if(res === true){
                toast.success("Verification completed");
                navigate("/login");
                otpFormValue.otp="";
            }else{
                toast.error("Something went wrong!");
                otpFormValue.otp="";
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
                    <p className={"my-4"}>Verify your account to access your account</p>
                    {/*<img src={loginVec} alt={""} className={"w-64 rounded-xl"}/>*/}
                </div>
                <motion.div whileHover={{scale: 1.1}} transition={{type: "spring", stiffness: 400, damping: 17}}
                            className="card w-96 bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title">OTP VERIFICATION</h2>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Otp</span>
                            </label>
                            <input type="text" placeholder="Your otp" value={otpFormValue.otp}
                                   className="input input-bordered input-primary"
                                   onChange={(e) => otpFormOnChange("otp", e.target.value)}
                                   required/>
                        </div>

                        <div className="form-control mt-6">
                            <SubmitBtn onClick={onFormSubmit} text={"Submit"}/>
                        </div>

                    </div>
                </motion.div>
            </div>


        </section>
    );
};

export default OtpForm;