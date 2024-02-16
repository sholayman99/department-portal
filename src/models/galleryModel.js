/*
* Author : Md. Sholayman
* Description: This file contains a database model for user.
* Date: 30 January  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        img1:{type:String,required:true},
        img2:{type:String,required:true},
        img3:{type:String,required:true},
        img4:{type:String,required:true},
        img5:{type:String,required:true},
        img6:{type:String},
        img7:{type:String},
        img8:{type:String},
        img9:{type:String},
        img10:{type:String},


    },
    {timestamps:true , versionKey:false})

const galleryModel = mongoose.model("galleries",dataSchema);
module.exports = galleryModel;