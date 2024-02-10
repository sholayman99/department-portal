import {create} from "zustand";
import axios from "axios";
import {setEmail} from "../helper/utility.js";


const userStore = create((set)=>({

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

    isFormSubmit:false,
    userLoginRequest:async(postBody)=>{
        set({isFormSubmit:true})
        let res = await axios.post('/api/v1/login',postBody);
        let data = await res['data'];
        set({isFormSubmit:false});
        return data['status'] === "success";

    },

    userAccountCreateRequest:async(postBody)=>{
        console.log(postBody)
        set({isFormSubmit:true});
        let res = await axios.post('/api/v1/createAccount',postBody);
        console.log(res.data);
        let data = await res['data'];
        setEmail(postBody.email);
        set({isFormSubmit:false});
        return data['status'] === "success";
    }



}));

export default userStore;
