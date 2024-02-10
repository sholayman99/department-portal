import axios from "axios";
import {create}   from "zustand";
import {unauthorized} from "../helper/utility.js";

const teacherStore = create((set)=>({

    teacherList:null,
    teacherListRequest:async()=>{
        let res = await axios.get('/api/v1/readTeachers');
        let data = await res['data'];
        if(data['status']==="success"){
            set({teacherList:data['data']})
        }
    },

    teacherDetails:null,
    teacherDetailsRequest:async(id)=>{
        try{
            let res = await axios.get(`/api/v1/readTeacherDetails/${id}`);
            let data = await res['data'];
            if(data['status']==="success"){
                set({teacherDetails:data['data'][0]})
            }
        }catch (e) {
            unauthorized(e.response.status);
        }
    },


}))

export default teacherStore;