/*
* Author : Md. Sholayman
* Description: This file contains a database model for a user profile.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        userID:{type:mongoose.Schema.Types.ObjectId , required:true}
    },
    {timestamps:true , versionKey:false})

const dataModel = mongoose.model("profiles",dataSchema);