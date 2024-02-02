/*
* Author : Md. Sholayman
* Description: This file contains all the api end point of the project.
*  Date: 30 January  2024.
* */

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const studentController = require("../controllers/studentController")
const authVerifyMiddleware = require("../middlewares/authVerifyMiddleware")

//user
router.post("/createAccount", userController.createAccount);
router.post("/verifyAccount/:email/:otp", userController.verifyAccount);
router.post("/login", userController.login);

//students
router.get("/readStudents" , studentController.readStudents);
router.get("/readStudentDetails/:id",authVerifyMiddleware, studentController.readStudentDetails);




module.exports=router;