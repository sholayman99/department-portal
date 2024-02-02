/*
* Author : Md. Sholayman
* Description: This file contains a middleware function for user account.
*  Date: 30 January  2024.
* */

const {decodeToken} = require("../utility/tokenHelper");

module.exports =(req, res, next)=>{
    let token = req.headers['token'];
    if(!token){
        token = req.cookies['token'];
    }
    let decoded = decodeToken(token);
    if(decoded === null){
        return res.status(401).json({status:"fail" , message:"Unauthorized"});
    }else{
        let email = decoded['email'];
        let userID = decoded['userID'];
        req.headers.email = email;
        req.headers.userID = userID;
        next();
    }
}