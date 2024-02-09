import {create} from "zustand";
import axios from "axios";


const studentStore = create((set)=>({

    studentList:null,
    studentListRequest:async()=>{
        let res = await axios.get('/api/v1/readStudents');
        let data = await res['data'];
        if(data['status']==="success"){
            set({studentList:data['data']});
        }
    }

}));

export default studentStore;