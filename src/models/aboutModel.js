/*
* Author : Md. Sholayman
* Description: This file contains a database model for about.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        title:{type:String,required:true},
        des:{type:String,required:true},
    },
    {timestamps:true , versionKey:false})

const aboutModel = mongoose.model("abouts",dataSchema);
module.exports=aboutModel;