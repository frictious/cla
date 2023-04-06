const   mongoose            = require("mongoose");

const classSchema = mongoose.Schema({
    name : { // Name of class e.g class 1, class 2...
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    teacherInCharge : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Teacher"
    }
});

module.exports = mongoose.model("Class", classSchema);
