import {create} from "zustand";
import axios from "axios";


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
        console.log(data);
        if(data['status']==='success'){
            set({studentList:data['data']});
        }
    }


}));

export default studentStore;