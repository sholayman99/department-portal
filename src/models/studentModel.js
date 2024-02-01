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
        email:{type:String,required:true}
    },
    {timestamps:true , versionKey:false})

const dataModel = mongoose.model("students",dataSchema);