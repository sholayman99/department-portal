/*
* Author : Md. Sholayman
* Description: This file contains a database model for user.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    email:{ type:String, required:true, unique:true, lowercase:true },
    password:{type:String,required:true},
    otp:{type:String,required:true}
},
{timestamps:true , versionKey:false})

const dataModel = mongoose.model("users",dataSchema);