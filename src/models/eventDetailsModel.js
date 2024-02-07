/*
* Author : Md. Sholayman
* Description: This file contains a database model for events.
* Date: 07 February  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        eventID:{type:mongoose.Schema.Types.ObjectId,required:true},
        host:{type:String,required:true},
        details:{type:String,required:true}
    },
    {timestamps:true , versionKey:false})

const eventDetailsModel = mongoose.model("eventdetails",dataSchema);
module.exports=eventDetailsModel;