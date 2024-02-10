/*
* Author : Md. Sholayman
* Description: This file contains all the controller for students.
* Date: 31 January  2024.
* */

const {readStudentsService,readStudentsDetailService,findStudentByKeywordService} = require("../services/studentService")

//find students controller
exports.readStudents = async (req,res)=>{
   let data = await readStudentsService(req);
   if(data['status']==="success"){
       res.status(200).json(data);
   }else{
       res.status(400).json(data);
   }
}

//find students details controller
exports.readStudentDetails = async (req,res)=>{
    let data = await readStudentsDetailService(req);
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}

//search student by keyword controller
exports.findStudentByKeyword = async (req,res)=>{
    let data = await findStudentByKeywordService(req);
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}
