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
    isFormSubmit:false,
    userLoginRequest:async(postBody)=>{
        console.log(postBody)
        set({isFormSubmit:true})
        let res = await axios.post('/api/v1/login',postBody);
        let data = await res['data'];
        set({isFormSubmit:false});
        return data['status'] === "success";

    }

}));

export default userStore;
