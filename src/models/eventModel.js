/*
* Author : Md. Sholayman
* Description: This file contains a database model for events.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        title:{type:String,required:true},
        des:{type:String,required:true},
        date:{type:String,required:true}
    },
    {timestamps:true , versionKey:false})

const eventModel = mongoose.model("events",dataSchema);
module.exports=eventModel;