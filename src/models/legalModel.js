/*
* Author : Md. Sholayman
* Description: This file contains a database model for legals.
* Date: 06 February  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({

        title:{type:String,required:true},
        des:{type:String,required:true},
        type:{type:String,required:true}
    },
    {timestamps:true , versionKey:false})

const legalModel = mongoose.model("legals",dataSchema);
module.exports=legalModel;