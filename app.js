require("dotenv").config();
const express= require("express")
const mongoose = require("mongoose");
const cors=require("cors")
const app=express()
const port=process.env.port || 3001
const goalRouter=require("./routes/goalRouter")

// middleware are function that has access to request and response 
app.use(express.json()) ; 
app.use(cors())  



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
 await mongoose.connect(process.env.Mongo_Url, {dbName:"goals"})
app.listen(port, () => {
  console.log(`server running on port:${port}`);
});
    }catch (error){
console.log(error)
    }
         
    
}
connectToDb()

