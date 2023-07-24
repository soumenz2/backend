
//const http=require('http')
const express=require('express')
//import express from "express";
const {registerUser,loginUser}=require("./controler/userController")
//import {registerUser,loginUser} from "./controler/userController"

const userRoute = express.Router();




userRoute.post('/login', loginUser);
userRoute.post('/register', registerUser);

module.exports =  userRoute ;


