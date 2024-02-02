/*
* Author : Md. Sholayman
* Description: This file contains a database model for students.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        studentName:{type:String,required:true},
        session:{type:String,required:true},
        avatar:{type:String,required:true},
        email:{type:String,required:true},
        division:{type:String, required:true},
        dis:{type:String, required:true},
        ps:{type:String, required:true},
        po:{type:String, required:true},
        vil:{type:String, required:true},
        bio:{type:String, required:true},
        bod:{type:String, required:true},
        age:{type:String, required:true},
        hobby:{type:String, required:true},
        mobile:{type:String, required:true},
        year:{type:String,required:true},
    },
    {timestamps:true , versionKey:false})

const studentModel = mongoose.model("students",dataSchema);
module.exports=studentModel;