/*
* Author : Md. Sholayman
* Description: This file contains a database model for notice.
* Date: 21 February 2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        title:{type:String,required:true},
        date:{type:String,required:true},
        des:{type:String,required:true},
    },
    {timestamps:true , versionKey:false})

const noticeModel = mongoose.model("notices",dataSchema);
module.exports=noticeModel;