/*
* Author : Md. Sholayman
* Description: This file contains all the queries for staff controller.
* Date: 31 January  2024.
* */

const staffModel = require("../models/staffModel");


//find teachers controller
const readStaffService = async (req)=>{
    try {
        let matchStage = {$match:{}};
        let data = await staffModel.aggregate([
            matchStage
        ]);
        return {status:"success" , data:data}
    }catch (e) {
        return {status:"failed" , data:e.message}
    }
}

//find teachers details controller
const readStaffDetailService = async (req)=>{
    try {
        let id = req.params.id;
        let data = await staffModel.find({_id:id})
        return {status:"success" , data:data}
    }catch (e) {
        return {status:"failed" , data:e.message}
    }

}

module.exports={readStaffService,readStaffDetailService};