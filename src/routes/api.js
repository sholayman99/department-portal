/*
* Author : Md. Sholayman
* Description: This file contains all the api end point of the project.
*  Date: 30 January  2024.
* */

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authVerifyMiddleware = require("../middlewares/authVerifyMiddleware")

router.post("/createAccount", userController.createAccount);
router.post("/verifyAccount/:email/:otp", userController.verifyAccount);
router.post("/login", userController.login);




module.exports=router;