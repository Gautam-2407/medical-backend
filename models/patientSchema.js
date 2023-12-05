const mongoose = require("mongoose");

const patientchema = new mongoose.Schema({
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
    description: {
        type: String,
        required:true,
    },
    registerInfo:[{
        drName:{
            type:String,
            default:null
        },
        staff:{
            type:String,
            default:null
        },
        wardNo:{
            type:String,
            default:null
        },
    }],
    password:{
        type:String,
        required:true

    }

});

const patient = new mongoose.model("patient",patientchema);

module.exports = patient;