/*
* Author : Md. Sholayman
* Description: This file contains all the controller for staffs.
* Date: 31 January  2024.
* */

const {readStaffService,readStaffDetailService} = require("../services/staffService")


//find staffs controller
exports.readStaffs = async (req,res)=>{
    let data = await readStaffService(req);
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}

//find staffs details controller
exports.readStaffDetails = async (req,res)=>{

    let data = await readStaffDetailService(req);
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }

}




