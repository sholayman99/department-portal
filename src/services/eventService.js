/*
* Author : Md. Sholayman
* Description: This file contains all the queries for event controller.
* Date: 31 January  2024.
* */


const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
//controller for event
const eventModel = require("../models/eventModel");
const eventDetailsModel = require("../models/eventDetailsModel")


//query for all event
const findEventService = async ()=>{
    try {
        let matchStage = {$match:{}};
        let data = await eventModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}


//query for event details
const findEventDetailsService = async (req)=>{
    try {
        let eventID = new ObjectId(req.params.eventID);
        let matchStage = {$match:{eventID:eventID}};

        let joinWithEventStage = {$lookup:{
            from:"events" , localField:"eventID" , foreignField:"_id" , as:"event"
            }}
        let unwindJoinStage = {$unwind:"$event"};

        let projectStage = {
            $project:{
                "_id":0, "eventID":0 , "event.des":0 , "event._id":0
            }
        }

        let data = await eventDetailsModel.aggregate([
            matchStage,joinWithEventStage,unwindJoinStage,projectStage
        ]);

        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}



module.exports={findEventService,findEventDetailsService};