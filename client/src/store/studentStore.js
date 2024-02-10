import {create} from "zustand";
import axios from "axios";
import {unauthorized} from "../helper/utility.js";


const studentStore = create((set)=>({

    SearchKeyword:"",
    SetSearchKeyword: async(keyword)=>{
        set({SearchKeyword:keyword})
    },

    studentList:null,
    studentListRequest:async()=>{
        let res = await axios.get('/api/v1/readStudents');
        let data = await res['data'];
        if(data['status']==="success"){
            set({studentList:data['data']});
        }
    },

    studentListByKeywordRequest:async(keyword)=>{
        let res = await axios.get(`/api/v1/findStudentByKeyword/${keyword}`);
        let data = await res['data'];
        if(data['status']==='success'){
            set({studentList:data['data']});
        }
    },

    studentDetails:null,
    studentDetailsRequest:async(id)=>{
        try{
            let studentID = id.id;
            let res = await axios.get(`/api/v1/readStudentDetails/${studentID}`);
            let data = await res['data'];
            if(data['status']==="success"){
                set({studentDetails:data['data'][0]})
            }
        }catch (e) {
            unauthorized(e.response.status);
        }
    },



}));

export default studentStore;