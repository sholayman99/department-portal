/*
* Author : Md. Sholayman
* Description: This file contains all the controller for users.
* Date: 31 January  2024.
* */

const userModel = require("../models/userModel")
const {
    loginService,verifyAccountService,createAccountService } = require("../services/userService")


//user creation controller
exports.createAccount = async (req,res)=>{

    let data = await createAccountService(req);

    if(data['status']==="success"){
        res.status(201).json(data);
    }else{
        res.status(400).json(data);
    }



}

//verify user account controller
exports.verifyAccount = async (req,res)=>{
    let data = await verifyAccountService(req);
    if(data['status']==="success"){
        res.status(201).json(data);
    }else{
        res.status(400).json(data);
    }
}

// user login account controller
exports.login = async (req,res)=>{
   let data = await loginService(req);
   if(data['status']==="success"){
           let cookieOption={
               expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
               httpOnly:false
           }
           res.cookie("token",data['token'],cookieOption);
           return res.status(200).json(data);
       } else{
       return res.status(200).json(data);
   }
}

//user logout controller
exports.logOut =async (req,res)=>{
    let cookieOption={
        expires: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        httpOnly:false
    }
    res.cookie("token","",cookieOption);
    return res.status(200).json({status:"success" , message:"logout successfully"});
}



