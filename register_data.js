const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Student,College} = require('./schema');
const college_data = require('./college_data');
const student_data = require('./student_data');

router.get("/",function(req,res){
    res.send("add extension college or studnets");
})
router.get("/register_college",function(req,res){
    insert_college_data(college_data);
})

router.get("/register_students",function(req,res){
    insert_student_data(student_data);
}) 


async function insert_student_data(student_data){

    try{
        await Student.insertMany(student_data);
        console.log("done inserting students!");
    }catch(e){
        console.log(e);
    };
};


async function insert_college_data(college_data){
    try{
        await College.insertMany(college_data);
        console.log("done inserting colleges!");
    }catch(e){
        console.log(e);
    };
}

module.exports = router;