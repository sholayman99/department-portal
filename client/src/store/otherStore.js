import axios from "axios";
import {create}   from "zustand";

const OtherStore = create((set)=>({
    sliderList :null,
    sliderListRequest : async ()=>{
        let res = await axios.get("/api/v1/findSliders");
        let data = await res['data'];
        if(data['status']==="success"){
            set({sliderList:data['data']});
        }
    },
    messageList :null,
    messageListRequest : async ()=>{
        let res = await axios.get("/api/v1/findMessage");
        let data = await res['data'];
        console.log(data['data'][0])
        if(data['status']==="success"){
            set({messageList:data['data'][0]})
        }

    },

}))

export default OtherStore;