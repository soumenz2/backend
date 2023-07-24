const express = require("express");
const mongoose = require("mongoose");
//const cors = require("cors");
const userRoute=require("./route")
const app=express();
const port=8081;
const bodyparser=require("body-parser")
const dbstring="mongodb+srv://soumen:Unlock2@cluster0.0fltutv.mongodb.net/"


const connectDB=async ()=>{
    try{
        await mongoose.connect(dbstring)
        console.log("database connected successfully")

    }catch(error){
console.error("ERROR",error)
throw error

    }
}

// app.get('/',(req,res)=>{
//     res.json({message:"I am Homepage"})
// })
app.use(bodyparser.json())
app.use('/user',userRoute)

app.listen(port, async () => {
    console.log(`Server started on port ${port}`);
    try {
      const db = await connectDB();
      // You can now use the 'db' object to perform database operations within your Express routes.
    } catch (err) {
      console.error('Error connecting to the database:', err);
      process.exit(1);
    }
  });