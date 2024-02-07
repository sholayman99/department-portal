/*
* Author : Md. Sholayman
* Description: This file contains all the queries for event controller.
* Date: 31 January  2024.
* */

//controller for event
const eventModel = require("../models/eventModel");

const findEventService = async ()=>{
    try {
        let matchStage = {$match:{}};
        let data = await eventModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}



module.exports={findEventService};