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
const noticeController = require("../controllers/noticeController")
const eventController = require("../controllers/eventController")
const authVerifyMiddleware = require("../middlewares/authVerifyMiddleware")



//user
router.post("/createAccount", userController.createAccount);
router.post("/verifyAccount/:email/:otp", userController.verifyAccount);
router.post("/login", userController.login);
router.get('/logOut' , userController.logOut);

//students
router.get("/readStudents" , studentController.readStudents);
router.get("/readStudentDetails/:id",authVerifyMiddleware, studentController.readStudentDetails);
router.get('/findStudentByKeyword/:keyword' , studentController.findStudentByKeyword)

//teachers
router.get("/readTeachers" , teacherController.readTeachers);
router.get("/readTeacherDetails/:id",authVerifyMiddleware, teacherController.readTeacherDetails);


//staffs
router.get("/readStaffs" , staffController.readStaffs);
router.get("/readStaffDetails/:id",authVerifyMiddleware, staffController.readStaffDetails);

//event
router.get("/findEvents" , eventController.findEvents);
router.get("/findEventDetails/:eventID" ,authVerifyMiddleware, eventController.findEventDetails);

//notice
router.get("/findNotices" , noticeController.findNotices );
router.get("/findNoticeDetails/:id" , authVerifyMiddleware , noticeController.findNoticeDetails);

//others
router.get("/findGallery" , otherController.findGallery);
router.get("/findProgrammes" , otherController.findProgrammes);
router.get("/findSliders" , otherController.findSliders);
router.get("/findMessage" , otherController.findMessage);
router.get('/aboutMessage' , otherController.aboutMessage);
router.get('/contactMessage' , otherController.contactMessage);
router.get('/legalMessage/:type' , otherController.legalMessage);

module.exports=router;