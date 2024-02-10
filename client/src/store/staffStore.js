import axios from "axios";
import {create}   from "zustand";
import {unauthorized} from "../helper/utility.js";

const staffStore = create((set)=>({

    staffList:null,
    staffListRequest:async()=>{
        let res = await axios.get('/api/v1/readStaffs');
        let data = await res['data'];
        if(data['status']==="success"){
            set({staffList:data['data']})
        }
    },

    staffDetails:null,
    staffDetailsRequest:async(id)=>{
        try{
            let res = await axios.get(`/api/v1/readStaffDetails/${id}`);
            let data = await res['data'];
            if(data['status']==="success"){
                set({staffDetails:data['data'][0]})
            }
        }catch (e) {
            unauthorized(e.response.status);
        }
    },


}))

export default staffStore;