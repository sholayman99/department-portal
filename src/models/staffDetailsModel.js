/*
* Author : Md. Sholayman
* Description: This file contains a database model for staffs details.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        staffID:{type:mongoose.Schema.Types.ObjectId , required:true},
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
    },
    {timestamps:true , versionKey:false})

const dataModel = mongoose.model("staffdetails",dataSchema);