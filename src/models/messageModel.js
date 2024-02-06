/*
* Author : Md. Sholayman
* Description: This file contains a database model for message.
* Date: 06 February  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        avatar:{type:String,required:true},
        name:{type:String,required:true},
        title:{type:String,required:true},
        message:{type:String,required:true},
        add:{type:String,required:true},
        text:{type:String,required:true}
    },
    {timestamps:true , versionKey:false})

const messageModel = mongoose.model("messages",dataSchema);
module.exports=messageModel;