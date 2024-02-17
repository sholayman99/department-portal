import axios from "axios";
import {create}   from "zustand";

const otherStore = create((set)=>({
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
        if(data['status']==="success"){
            set({messageList:data['data'][0]})
        }

    },
    programmeList:null,
    programmeListRequest:async()=>{
        let res = await axios.get('/api/v1/findProgrammes');
        let data = await res['data'];
        if(data['status']==="success"){
            set({programmeList:data['data']})
        }
    },

    imageList:null,
    imageListRequest:async()=>{
        let res = await axios.get('/api/v1/findGallery');
        let data = await res['data'];
        if(data['status']=== "success") {
            set({imageList:data['data']});
        }
    },
    about:null,
    aboutRequest:async ()=>{
        set({about:null})
        let res = await axios.get('/api/v1/aboutMessage');
        let data = await res['data'];
        if(data['status']=== "success") {
            set({about:data['data']});
        }
    },
    contact:null,
    contactRequest:async ()=>{
        set({contact:null})
        let res = await axios.get('/api/v1/contactMessage');
        let data = await res['data'];
        if(data['status']=== "success") {
            set({contact:data['data']});
        }
    },
    legal:null,
    legalRequest:async(type)=>{
        set({contact:null})
        let res = await axios.get(`/api/v1/legalMessage/${type}`);
        let data = await res['data'];
        if(data['status']=== "success") {
            set({legal:data['data'][0]});
        }
    }


}))

export default otherStore;