import axios from "axios";
import {create}   from "zustand";

const staffStore = create((set)=>({

    staffList:null,
    staffListRequest:async()=>{
        let res = await axios.get('/api/v1/readStaffs');
        let data = await res['data'];
        if(data['status']==="success"){
            set({staffList:data['data']})
        }
    },


}))

export default staffStore;