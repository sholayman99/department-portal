/*
* Author : Md. Sholayman
* Description: This file contains a database model for user.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        course:{type:String,required:true},
        img:{type:String,required:true},
        text:{type:String,required:true}
    },
    {timestamps:true , versionKey:false})

const programmeModel = mongoose.model("programmes",dataSchema);
module.exports = programmeModel;