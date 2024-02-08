/*
* Author : Md. Sholayman
* Description: This file contains all the queries for teacher controller.
* Date: 31 January  2024.
* */

//find teachers controller
const teacherModel = require("../models/teacherModel");
const readTeachersService = async (req, res)=>{
    try {
        let matchStage = {$match:{}};
        let sortStage ={$sort:{priority:1}};
        let data = await teacherModel.aggregate([
            matchStage,sortStage
        ]);
        return {status:"success" , data:data}
    }catch (e) {
        return {status:"failed" , data:e.message}
    }
}

//find teachers details controller
const readTeacherDetailsService = async (req,res)=>{
    try {
        let id = req.params.id;
        let data = await teacherModel.find({_id:id})
        return {status:"success" , data:data}
    }catch (e) {
        return {status:"failed" , data:e.message}
    }
}

module.exports ={readTeachersService,readTeacherDetailsService}
