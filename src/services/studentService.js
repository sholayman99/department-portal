/*
* Author : Md. Sholayman
* Description: This file contains all the queries for student controller.
* Date: 31 January  2024.
* */

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const studentModel = require("../models/studentModel");
const studentDetailModel = require("../models/studentDetailsModel")

//find teachers controller
const readStudentsService = async (req)=>{
  try {
      let matchStage = {$match:{}};
      let data = await studentModel.aggregate([
          matchStage
      ]);
      return {status:"success" , data:data}
  }catch (e) {
      return {status:"failed" , data:e.message}
  }
}

//find teachers details controller
const readStudentsDetailService = async (req)=>{
try {

    return {status:"success" , data:data}
}catch (e) {
    return {status:"failed" , data:e.message}
}

}

module.exports={readStudentsService,readStudentsDetailService};