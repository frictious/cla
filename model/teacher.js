const   mongoose                = require("mongoose");

const teacherSchema = mongoose.Schema({
    id : {
        type : Number,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    dob : {
        type : Date,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    dateofjoining : {
        type : Date,
        required : true
    },
    picture : {
        type : Buffer,
        required : true
    },
    pictureName : {
        type : String,
        required : true
    },
    subjectstaught : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subject"
    }],
    classes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Class"
    }],
    notes : { // Extra note or comments about the teacher
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Teacher", teacherSchema);
