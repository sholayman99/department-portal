/*
* Author : Md. Sholayman
* Description: This file contains all the queries for others controller.
* Date: 31 January  2024.
* */

const eventModel = require("../models/eventModel");
const galleryModel = require("../models/galleryModel");
const programmeModel = require("../models/programmeModel");
const sliderModel = require("../models/sliderModel");
const messageModel = require("../models/messageModel");
const aboutModel = require("../models/aboutModel");
const contactModel = require("../models/contactModel");
const legalModel = require("../models/legalModel");

//controller for slider
const findSliderService = async ()=>{
   try {
      let matchStage = {$match:{}};
      let data = await sliderModel.aggregate([matchStage]);
      return {status:"success" , data:data};
   }catch (e) {
       return {status:"error" , data:e.message};
   }
}

//controller for programme
const findProgrammeService = async ()=>{
    try {
        let matchStage = {$match:{}};
        let data = await programmeModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}



//controller for gallery
const findGalleryService = async ()=>{
    try {
        let matchStage = {$match:{}};
        let data = await galleryModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}

const findMessageService = async ()=>{
    try {
        let matchStage = {$match:{}};
        let data = await messageModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}

const aboutMessageService = async ()=>{
    try {
        let matchStage = {$match:{}};
        let data = await aboutModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}

const contactMessageService = async ()=>{
    try {
        let matchStage = {$match:{}};
        let data = await contactModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}


const legalMessageService = async (req)=>{
    try {
        let type = req.params.type;
        let matchStage = {$match:{type:type}};
        let data = await legalModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }catch (e) {
        return {status:"error" , data:e.message};
    }
}



module.exports ={findSliderService,findProgrammeService,findGalleryService,findMessageService,
    aboutMessageService,contactMessageService,legalMessageService};