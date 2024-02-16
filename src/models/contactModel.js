/*
* Author : Md. Sholayman
* Description: This file contains a database model for contact.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        title:{type:String,required:true},
        des:{type:String,required:true},
        img:{type:String,required:true},

    },
    {timestamps:true , versionKey:false})

const contact = mongoose.model("contacts",dataSchema);
module.exports=contact;