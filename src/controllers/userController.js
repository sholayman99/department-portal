/*
* Author : Md. Sholayman
* Description: This file contains all the controller for users.
* Date: 31 January  2024.
* */

const userModel = require("../models/userModel")
const {loginService,verifyAccountService} = require("../services/userService")


//user creation controller
exports.createAccount = async (req,res)=>{

  try {
    let reqBody = req.body;
    let data = await userModel.create(reqBody);
    res.status(201).json({message:"success" , data:data});
  } catch (e) {
    res.status(400).json({status:"failed" , data:e.message});
  }

}

//verify user account controller
exports.login = async (req,res)=>{
   let data = await loginService(req);
   res.status(200).json(data);
}

