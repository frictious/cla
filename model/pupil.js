const   mongoose                = require("mongoose");

const pupilSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    dob : {
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
    address : {
        type : String,
        required : true
    },
    parent : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Parent"
    },
    dateofadmission : {
        type : Date,
        required : true
    },
    class : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Pupil", pupilSchema);
