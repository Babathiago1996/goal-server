const router = require("express").Router();
const {
  createGoal,
  getAllGoals,
  getCompletedGoals,
  getOngoingGoals,
  getSingleGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.post("/", createGoal);
router.get("/", getAllGoals);
router.get("/completed", getCompletedGoals);
router.get("/ongoing", getOngoingGoals);
router.get("/:Id", getSingleGoal);
router.patch("/:goalId", updateGoal);
router.delete("/:goalId", deleteGoal);

module.exports = router;
