/*
* Author : Md. Sholayman
* Description: This file contains all the controller for event request.
* Date: 31 January  2024.
* */
const {findEventService,findEventDetailsService} = require("../services/eventService");

//controller for event
exports.findEvents = async (req,res)=>{
    let data = await findEventService();
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}

//controller for event details
exports.findEventDetails = async (req,res)=>{
    let data = await findEventDetailsService(req);
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}


