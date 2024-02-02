/*
* Author : Md. Sholayman
* Description: This file contains two helper functions for encoding and decoding jsonwebtoken.
* Date: 02  February  2024.
* */

const jwt = require("jsonwebtoken");

exports.encodeToken = (email,userID) =>{
    let key = "123-abc-xyz";
    let expires = {expiresIn: "48hrs"};
    let payload ={email:email,userID:userID};
     return jwt.sign(payload,key,expires);
};

exports.decodeToken = (token) =>{
    try {
        let key = "123-abc-xyz";
        return jwt.verify(token,key);
    }catch (e) {
        return null ;
    }
}