/*
* Author : Md. Sholayman
* Description: This file contains all the queries for notice controller.
* Date: 31 January  2024.
* */

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const noticeModel = require("../models/noticeModel");
const findNoticeService = async ()=>{
    try {
        let matchStage = {$match:{}};
        let data = await noticeModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}


const findNoticeDetailsService = async (req)=>{
    try {
        let id = new ObjectId(req.params.id);
        let matchStage = {$match:{_id:id}};
        let data = await noticeModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }
}

module.exports = {findNoticeService,findNoticeDetailsService}