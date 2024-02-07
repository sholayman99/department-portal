/*
* Author : Md. Sholayman
* Description: This file contains all the api end point of the project.
*  Date: 30 January  2024.
* */

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const teacherController = require("../controllers/teacherController")
const staffController = require("../controllers/staffController")
const studentController = require("../controllers/studentController")
const otherController = require("../controllers/otherController");
const eventController = require("../controllers/eventController")
const authVerifyMiddleware = require("../middlewares/authVerifyMiddleware")



//user
router.post("/createAccount", userController.createAccount);
router.post("/verifyAccount/:email/:otp", userController.verifyAccount);
router.post("/login", userController.login);

//students
router.get("/readStudents" , studentController.readStudents);
router.get("/readStudentDetails/:id",authVerifyMiddleware, studentController.readStudentDetails);

//teachers
router.get("/readTeachers" , teacherController.readTeachers);
router.get("/readTeacherDetails/:id",authVerifyMiddleware, teacherController.readTeacherDetails);


//staffs
router.get("/readStaffs" , staffController.readStaffs);
router.get("/readStaffDetails/:id",authVerifyMiddleware, staffController.readStaffDetails);

//event
router.get("/findEvents" , eventController.findEvents);
router.get("/findEventDetails/:eventID" , eventController.findEventDetails);


//others

router.get("/findGallery" , otherController.findGallery);
router.get("/findProgrammes" , otherController.findProgrammes);
router.get("/findSliders" , otherController.findSliders);
router.get("/findMessage" , otherController.findMessage);

module.exports=router;