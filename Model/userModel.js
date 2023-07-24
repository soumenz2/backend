//import mongoose from 'mongoose';
const mongoose=require("mongoose")
const userschema =mongoose.Schema({
    name:{type:String, required:true},
    emailId:{type:String,required:true},
    password:{
        type:String,required:true
    }
})
const userModel=mongoose.model("user",userschema)
module.exports=userModel