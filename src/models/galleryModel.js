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

const galleryModel = mongoose.model("galleries",dataSchema);
module.exports = galleryModel;