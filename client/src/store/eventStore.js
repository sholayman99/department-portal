import axios from "axios";
import {create}   from "zustand";

const eventStore = create((set)=>({

    eventList:null,
    eventListRequest:async()=>{
        let res = await axios.get('/api/v1/findEvents');
        let data = await res['data'];
        if(data['status']==="success"){
            set({eventList:data['data']})
        }
    },

    eventDetails:null,
    eventDetailsRequest:async(eventID)=>{
        let res = await axios.get(`/api/v1/findEventDetails/${eventID}`);
        let data = await res['data'];
        if(data['status']==="success"){
            set({eventDetails:data['data'][0]})
        }
    },

}))

export default eventStore;