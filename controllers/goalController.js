const GOAL = require("../models/goal")

const createGoal=async(request, response)=>{
    // response.json(request.body) 
    const {title,description}=request.body
    if(!title || !description){
      return response.status(400).json({message:"provide title and description"})
    }
    try{
      //  create save
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
  response.send("get all goals");
};
const getOngoingGoals = async (request, response) => {
  response.send("get ongoing goal");
};

const getCompletedGoals = async (request, response) => {
  response.send("get completed goal");
};
const getSingleGoal = async (request, response) => {
  response.send("get single goal");
};
const updateGoal = async (request, response) => {
  response.send("update goal");
};
const deleteGoal = async (request, response) => {
  response.send("delete goal");
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