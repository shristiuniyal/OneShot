const mongoose = require('mongoose');
var d = new Date();

const studentSchema = new mongoose.Schema({
    name : { 
        type: String,
        required : true
    },
    student_id: {
        type: String,
        unique: true,
        required : true
    },
    date : { 
        type: Date, 
        default: d.getFullYear()
     },
    college_id : {
        type: String,
        required : true
      },
    skills : [{
        type: String
    }]
  });

  const collegeSchema = new mongoose.Schema({
    college_id : {
        type: String,
        unique: true,
        required : true
      },
    name : { 
        type: String,
        unique: true,
        required : true
    },
    year_founded : { 
         type: Date,
         default: d.getFullYear()
        },
    city : {
        type:String,
        required:true
    },
    state : {
        type:String,
        required:true
    },
    country : {
        type:String,
        default : 'India'
    },
    courses : [{
        type: String
    }]
  });
  
const Student = new mongoose.model("Student",studentSchema);
const College = new mongoose.model("College",collegeSchema);

module.exports ={ Student , College};
