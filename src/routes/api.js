/*
* Author : Md. Sholayman
* Description: This file contains all the api end point of the project.
*  Date: 30 January  2024.
* */

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/createAccount", userController.createAccount);
router.post("/login", userController.login);


module.exports=router;