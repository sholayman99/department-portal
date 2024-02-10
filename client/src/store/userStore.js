import {create} from "zustand";
import axios from "axios";
import {getEmail, setEmail} from "../helper/utility.js";
import Cookies from "js-cookie";


const userStore = create((set)=>({

    isLogin:()=>{
        return !!Cookies.get("token");
    },

    loginFormValue:{email: "", password: ""},
    loginValueOnChange:(name,value)=>{
    set((state)=>({
        loginFormValue:{
            ...state.loginFormValue,
            [name]:value
        }
    }))
    },
    accountFormValue:{email:"",password:""},
    accountFormOnChange:(name,value)=>{
        set((state)=>({
            accountFormValue:{
                ...state.accountFormValue,
                [name]:value
            }
        }))
    },
    otpFormValue:{otp:""},
    otpFormOnChange:(name,value)=>{
       set((state)=>({
           otpFormValue:{
               ...state.otpFormValue,
               [name]:value
           }
       }))
    },


    isFormSubmit:false,
    userLoginRequest:async(postBody)=>{
        set({isFormSubmit:true})
        let res = await axios.post('/api/v1/login',postBody);
        let data = await res['data'];
        set({isFormSubmit:false});
        return data['status'] === "success";

    },

    userLogoutRequest:async ()=>{
        let res = await axios.get('/api/v1/logOut');
        let data = await res['data'];
        return data['status'] === "success";
    },

    userAccountCreateRequest:async(postBody)=>{
        set({isFormSubmit:true});
        let res = await axios.post('/api/v1/createAccount',postBody);
        let data = await res['data'];
        setEmail(postBody.email);
        set({isFormSubmit:false});
        return data['status'] === "success";
    },

    userVerifyRequest:async(postBody)=>{
        let otp = postBody.otp;
        let email = getEmail()
        set({isFormSubmit:true});
        let res = await axios.post(`/api/v1/verifyAccount/${email}/${otp}`);
        let data = await res['data'];
        set({isFormSubmit:false});
        return data['status'] === "success";
    }



}));

export default userStore;
