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

}))

export default OtherStore;