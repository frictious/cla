const   mongoose                = require("mongoose");

const subjectSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true
    },
    description : { // Use a textarea to enter the subject description
        type : String,
        required : true
    },
    curriculum : { // Subject curriculum
        type : Buffer,
        required : true
    },
    material : { // Material used to teach the subject
        type : Buffer
    }
});

module.exports = mongoose.model("Subject", subjectSchema);
