import axios from "axios";
import {create}   from "zustand";
import {unauthorized} from "../helper/utility.js";

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
       try{
           let res = await axios.get(`/api/v1/findEventDetails/${eventID}`);
           let data = await res['data'];
           if(data['status']==="success"){
               set({eventDetails:data['data'][0]})
           }
       }catch (e) {
        unauthorized(e.response.status);
       }
    },

}))

export default eventStore;