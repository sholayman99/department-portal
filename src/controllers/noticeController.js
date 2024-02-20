/*
* Author : Md. Sholayman
* Description: This file contains all the controller for notice request.
* Date: 31 January  2024.
* */
const {findNoticeService,findNoticeDetailsService} = require("../services/noticeService");

//controller for event
exports.findNotices = async (req,res)=>{
    let data = await findNoticeService();
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}

//controller for event details
exports.findNoticeDetails = async (req,res)=>{
    let data = await findNoticeDetailsService(req);
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}
