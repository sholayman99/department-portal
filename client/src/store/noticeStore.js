import axios from "axios";
import {create}   from "zustand";
import {unauthorized} from "../helper/utility.js";

const noticeStore = create((set)=>({

    noticeList:null,
    noticeListRequest:async()=>{
        let res = await axios.get('/api/v1/findNotices');
        let data = await res['data'];
        if(data['status']==="success"){
            set({noticeList:data['data']})
        }
    },

    noticeDetails:null,
    noticeDetailsRequest:async(id)=>{
        try{
            let res = await axios.get(`/api/v1/findNoticeDetails/${id}`);
            let data = await res['data'];
            if(data['status']==="success"){
                set({noticeDetails:data['data'][0]})
            }
        }catch (e) {
            unauthorized(e.response.status);
        }
    },

}))

export default noticeStore;