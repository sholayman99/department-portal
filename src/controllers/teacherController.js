/*
* Author : Md. Sholayman
* Description: This file contains all the controller for teachers.
* Date: 31 January  2024.
* */

//find teachers controller
const {readTeachersService,readTeacherDetailsService} = require("../services/teacherService");
exports.readTeachers = async (req, res)=>{
    let data = await readTeachersService(req);
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}

//find teachers details controller
exports.readTeacherDetails = async (req,res)=>{
    let data = await readTeacherDetailsService(req);
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}
