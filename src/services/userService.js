/*
* Author : Md. Sholayman
* Description: This file contains all the queries for user controller.
* Date: 31 January  2024.
* */

const userModel = require("../models/userModel");
const otpModel = require("../models/otpModel");
const emailSend = require("../utility/emailHelper");
const {encodeToken} = require("../utility/tokenHelper");


//user login service
const loginService = async (req)=>{
  try {
      let reqBody = req.body ;
      let email = reqBody.email;
      let password = reqBody.password;
      let matchStage = {$match:reqBody};
      let countStage = {$count:"total"};
      let result = await userModel.aggregate([
          matchStage,countStage
      ])

     if(result.length === 1){
         let userID = await userModel.find({email:email,password:password}).select("_id");
         let code = Math.round(Math.floor(100000 + Math.random()* 900000));
         let EmailText = `Your Otp Verification Code Is : ${code}`;
         let EmailSub = "Account Verification" ;
         await emailSend(email , EmailText , EmailSub) ;
         await otpModel.create({email:email , otp:code});
         let token = await encodeToken(email,userID);
         return {status:"success" , message:"6 digit otp Code has been send" , data:token};
     }else{
         return {status:"failed" , data:"No user found"} ;
     }

  }catch (e) {
      return {status:"failed" , data:e.message}
  }
}

//verify user account controller
const verifyAccountService = async (req,res)=>{

}


module.exports={loginService,verifyAccountService}
