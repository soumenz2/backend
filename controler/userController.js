//import {Usermodel} from '../Model/userModel'
const userModel=require("../Model/userModel")
const registerUser=async (req,res)=>{
  const  {name,emailId,password}=req.body;
  try {
    const newuser=new userModel({
        name:req.body.name,
        emailId:req.body.emailId,
        password:req.body.password
    })
    await newuser.save()  // creating a document in database
    res.status(200).send({msg:"User Registered Successfully"})
    
} catch (error) {
    res.status(501).send({msg:error.message})
}
}
const loginUser = async(req,res)=>{
    const {emailId,password} = req.body;

    try {
        const userData= await userModel.findOne({emailId});
        if(userData){
            // checking password provided by user is correct or not
            if(userData.password == password){
                res.status(200).send({msg:"User Login Successfully, Enjoy!"})
            }else{
                res.status(401).send({msg:"You have Entered Wrong Password"})
            }
        }else{
            res.status(404).send({msg:"No Account Find associated to this email"})
        }
        
    } catch (error) {
        res.status(501).send({msg:error.message})   
    }
}
module.exports={loginUser,registerUser}