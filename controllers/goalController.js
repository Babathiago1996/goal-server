const GOAL = require("../models/goal")

const createGoal=async(request, response)=>{
    // response.json(request.body) 
    const {title,description}=request.body
    if(!title || !description){
      return response.status(400).json({message:"provide title and description"})
    }
    try{
      //  create //save
      const goal=await GOAL.create(request.body)
      return response.status(201).json({success:true, goal})

    }catch (error){
      console.log(error);
      return response.status(400).json({
        message:error.message
      })
    }
}

const getAllGoals = async (request, response) => {
  // response.send("get all goals");
  const goals=await GOAL.find().sort("-createdAt")
  response.status(200).json({success:true, num:goals.length, goals})
};
const getOngoingGoals = async (request, response) => {
  // response.send("get ongoing goal");
   const goals = await GOAL.find({progress:{$lt:100}}).sort("-createdAt");
   response.status(200).json({ success: true, num: goals.length, goals });
};

const getCompletedGoals = async (request, response) => {
  // response.send("get completed goal");
   const goals = await GOAL.find({progress:{$eq:100}}).sort("-createdAt");
   response.status(200).json({ success: true, num: goals.length, goals });
};
const getSingleGoal = async (request, response) => {
  // response.send("get single goal");
  const {goalId}=request.params
  const goal=await GOAL.findById(goalId)
  response.status(200).json({success:true, goal})
};
const updateGoal = async (request, response) => {
  // response.send("update goal");
    const { goalId } = request.params;
    try{
const goal =await GOAL.findByIdAndUpdate(goalId, request.body, {new:true, runValidators:true})
return response.status(200).json({success:true, goal})
    }catch (error){
       console.log(error);
       return response.status(400).json({
         message: error.message,
       });
    }

};
const deleteGoal = async (request, response) => {
  // response.send("delete goal");
    const { goalId } = request.params;
    await GOAL.findByIdAndDelete(goalId)
    response.status(200).json({success:true, message:"Goal Deleted"})

};

module.exports={
    createGoal,
    getAllGoals,
    getCompletedGoals,
    getOngoingGoals,
    getSingleGoal,
    updateGoal,
    deleteGoal,
}