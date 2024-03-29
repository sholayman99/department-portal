/*
* Author : Md. Sholayman
* Description: This file contains a database model for user.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        img:{type:String,required:true}
    },
    {timestamps:true , versionKey:false})

const sliderModel = mongoose.model("sliders",dataSchema);
module.exports = sliderModel;