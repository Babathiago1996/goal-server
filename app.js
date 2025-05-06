require("dotenv").config();
const express= require("express")
const mongoose = require("mongoose");

const app=express()
const port=3001
const goalRouter=require("./routes/goalRouter")

// middleware are function that run on server
app.use(express.json())    



// home route
app.get("/", (request,response)=>{
    response.status(200).json({
        message:"welcome to goal api"
    })
})

app.use("/goals", goalRouter)


// error route

app.use((request, response)=>{
    response.status(404).json({
        success:false,
        message:"resource not found"
    })
})
const connectToDb=async()=>{
    try {
//db connection logic
 await mongoose.connect(process.env.Mongo_Url, {dbName:"gaols"})
app.listen(port, () => {
  console.log(`server running on port:${port}`);
});
    }catch (error){
console.log(error)
    }
         
    
}
connectToDb()

