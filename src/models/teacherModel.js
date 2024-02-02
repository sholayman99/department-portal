/*
* Author : Md. Sholayman
* Description: This file contains a database model for teachers.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        teacherName:{type:String,required:true},
        avatar:{type:String,required:true},
        mobile:{type:String,required:true},
        email:{type:String,required:true}, division:{type:String, required:true},
        dis:{type:String, required:true},
        ps:{type:String, required:true},
        po:{type:String, required:true},
        vil:{type:String, required:true},
        bio:{type:String, required:true},
        bod:{type:String, required:true},
        age:{type:String, required:true},
        hobby:{type:String, required:true},
        bcsBatch:{type:String, required:true},
        designation:{type:String, required:true} ,
        qualification:{type:String, required:true}
    },
    {timestamps:true , versionKey:false})

const teacherModel = mongoose.model("teachers",dataSchema);

module.exports = teacherModel;