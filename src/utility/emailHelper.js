/*
* Author : Md. Sholayman
* Description: This file contains a helper function for sending email to user.
* Date: 02 February  2024.
* */

const nodemailer = require("nodemailer");

const emailSend = async (email,sub,text)=>{

    const transport=nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs'},
        tls: {rejectUnauthorized: false},
    });

    const emailOptions ={
        from:"departmentPortal <info@teamrabbil.com>",
        to:email,
        subject:sub,
        text:text
    }

     return await transport.sendMail(emailOptions);
};

module.exports = emailSend;