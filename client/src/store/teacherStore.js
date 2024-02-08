import axios from "axios";
import {create}   from "zustand";

const teacherStore = create((set)=>({

    teacherList:null,
    teacherListRequest:async()=>{
        let res = await axios.get('/api/v1/readTeachers');
        let data = await res['data'];
        if(data['status']==="success"){
            set({teacherList:data['data']})
        }
    },


}))

export default teacherStore;