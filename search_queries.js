const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Student,College} = require('./schema');

router.get("/find_distribution_state",function(req,res){
    find_distribution_state();
})

router.get("/find_distribution_course",function(req,res){
    find_distribution_course();
})

router.get("/get_student_details_by_id",function(req,res){
    get_student_details_by_id();
})

router.get("")

async function find_distribution_state(){
   const result_state =await College.aggregate(
        [
            {$match :{} },
            {$group: {"_id" : "$state", "location_count" : { "$sum": 1 }}}
        ]
    )
    console.log(result_state);
    return result_state;
}

async function find_distribution_course(){

    const result_course =await College.aggregate(
         [ 
             {$unwind: "$courses" },
             {$group: {"_id" : "$courses", "course_count" : { "$sum": 1 }}}
         ]
     )
     console.log(result_course);
     return result_course;
 }

 async function get_student_details_by_id(id){

    const student_details = await Student.findOne({student_id: id});
    return student_details;
 }

 async function get_student_details_by_name(name){

        const student_details = await Student.find({name: name});
        return student_details;
 }

 async function get_students_in_college(college)
 {
    const college_students_details = await Student.find({college_id : college});
    return college_students_details;
 }
 
 module.exports = router;