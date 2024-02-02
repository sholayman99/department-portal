/*
* Author : Md. Sholayman
* Description: This file contains two helper functions for encoding and decoding jsonwebtoken.
* Date: 02  February  2024.
* */

const jwt = require("jsonwebtoken");

exports.encodeToken = (email,userID) =>{
    let secretKey = "123-xyz-abc-@#";
    let expires = {expiresIn: "48hrs"};
    let payload ={email:email,userID:userID};
     return jwt.sign(payload,expires,secretKey);
};

exports.decodeToken = (token) =>{
    try {
        let secretKey = "123-xyz-abc-@#";
        return jwt.verify(token,secretKey);
    }catch (e) {
        return null ;
    }
}