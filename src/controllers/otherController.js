/*
* Author : Md. Sholayman
* Description: This file contains all the controller for others request.
* Date: 31 January  2024.
* */


const {findSliderService,findProgrammeService,findGalleryService,
    findMessageService,aboutMessageService,contactMessageService,legalMessageService} = require("../services/otherService")

//controller for slider
exports.findSliders = async (req,res)=>{
       let data = await findSliderService();
       if(data['status']==="success"){
           res.status(200).json(data);
       }else{
            res.status(400).json(data);
       }
}

//controller for programme
exports.findProgrammes = async (req,res)=>{
    let data = await findProgrammeService();
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}


//controller for gallery
exports.findGallery = async (req,res)=>{
    let data = await findGalleryService();
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}


exports.findMessage = async (req,res)=>{
    let data = await findMessageService();
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}


exports.aboutMessage = async (req,res)=>{
    let data = await aboutMessageService();
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}

exports.contactMessage = async (req,res)=>{
    let data = await contactMessageService();
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}


exports.legalMessage = async (req,res)=>{
    let data = await legalMessageService(req);
    if(data['status']==="success"){
        res.status(200).json(data);
    }else{
        res.status(400).json(data);
    }
}


