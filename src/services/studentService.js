/*
* Author : Md. Sholayman
* Description: This file contains all the queries for student controller.
* Date: 31 January  2024.
* */

const studentModel = require("../models/studentModel");


//find teachers query
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

//find teachers details query
const readStudentsDetailService = async (req)=>{
try {
     let id = req.params.id;
     console.log(id)
     let data = await studentModel.find({_id:id});
    return {status:"success" , data:data};
}catch (e) {
    return {status:"failed" , data:e.message};
}
}

//find student by keyword query
const findStudentByKeywordService =async (req)=>{
    try {
        let keyword = req.params['keyword'];
        let searchRegex ={"$regex":keyword , "$options":"i"};
        let matchStage={$match: {studentName:searchRegex}};

        let data = await studentModel.aggregate([
            matchStage
        ]);
        return {status:"success" , data:data}
    }
    catch (e) {
        return {status:"failed" , data:e.message};
    }
}

module.exports={readStudentsService,readStudentsDetailService,findStudentByKeywordService};