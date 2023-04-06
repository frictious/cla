const   mongoose            = require("mongoose");

const employmenDetailsSchema = mongoose.Schema({
    employmentType : { // Part time or full time staff
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    },
    accountBankName : String,
    accountName : String,
    accoutnNumber : String,
    educatoinalQualification : { // Educational Qualification should be written in a textarea
        type : String,
        required : true
    },
    workExperiences : { // Work experience should be written in a textarea
        type : String,
        required : true
    },
    referenceone : {
        type : String,
        required : true
    },
    referencetwo : {
        type : String,
        required : true
    },
    teacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Teacher"
    }
});

module.exports = mongoose.model("EmploymentDetails", employmenDetailsSchema);
