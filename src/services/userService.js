/*
* Author : Md. Sholayman
* Description: This file contains all the queries for user controller.
* Date: 31 January  2024.
* */

const userModel = require("../models/userModel");
const emailSend = require("../utility/emailHelper");
const {encodeToken} = require("../utility/tokenHelper");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


//create account service

const createAccountService = async (req)=>{
    try {
        let reqBody = req.body;
        let email = req.body['email'];
        let otp = Math.round(Math.floor(100000 + Math.random()* 900000));
        let emailText = `Your Otp Verification Code Is : ${otp}`;
        let emailSub = "Account Verification" ;
        await emailSend(email , emailText , emailSub) ;
        reqBody.otp = otp;
        let data = await userModel.create(reqBody);
        return {status:"success" , message:"6 digit otp has been sent", data:data}

    }catch (e) {
        return {status:"failed" , data:e.message}
    }
}



//verify user account controller
const verifyAccountService = async (req)=>{
try {
    let email = req.params['email']
    let otp = req.params['otp'];
    let matchStage = {$match:{email:email,otp:otp}};
    let countStage = {$count:"total"};
    let result = await userModel.aggregate([
        matchStage,countStage
    ])

    if(result.length === 1){
       let data = await userModel.updateOne({email:email} ,{$set:{otp:"0"}});
       return {status:"success" , message:"Verification is complete",data:data};
    }
}catch (e) {
    return {status:"failed" ,  data:e.message}
}

}



//user login service
const loginService = async (req)=>{
  try {

      let email = req.body['email'];
      let pass = req.body['password'];
      let matchStage = {$match: {email:email,password:pass}};
      let countStage = {$count: 'total'};
      let result = await userModel.aggregate([matchStage,countStage]);
      if(result.length === 1){
         let userId = await userModel.find({email:email,password:pass}).select("_id");
         let userID = userId[0]['_id'];
         let token = encodeToken(email,userID);
         return {status:"success", message:"login successfully" , token:token}
      }else{
          return {status:"failed",message:"Something went wrong"}
      }

  }catch (e) {
      return {status:"failed" , data:e.message}
  }
}




module.exports={loginService,verifyAccountService,createAccountService}
