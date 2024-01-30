/*
* Author : Md. Sholayman
* Description: This file contains a database model for teachers.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        userID:{type:mongoose.Schema.Types.ObjectId , required:true},
        teacherName:{type:String,required:true},
        avatar:{type:String,required:true},
        mobile:{type:String,required:true}
    },
    {timestamps:true , versionKey:false})

const dataModel = mongoose.model("teachers",dataSchema);