/*
* Author : Md. Sholayman
* Description: This file contains a database model for otp.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        otp:{type:String,required:true},
        email:{type:String,required:true}
    },
    {timestamps:true , versionKey:false})

const otpModel = mongoose.model("otps",dataSchema);
module.exports =otpModel;