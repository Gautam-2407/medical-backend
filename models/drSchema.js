const mongoose = require("mongoose");

const drSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: true,
    },
    phone:{
        type :String  ,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },

    birth:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    lisence:{
        type: String,
        unique: true,
        required: true,
    },
    exp:{
        type: String,
        required: true,
    },
    speciality:{
        type: String,
        required: true,
    }

});

const drs = new mongoose.model("drs",drSchema);

module.exports = drs;