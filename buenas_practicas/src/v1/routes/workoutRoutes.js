const express = require('express')
const { 
  getAllWorkouts, 
  getWorkoutById, 
  createNewWorkout, 
  updateWorkoutById, 
  deleteWorkoutById 
} = require('../../controllers/workoutController')
const router = express.Router()

router
  .get('/', getAllWorkouts)
  .get('/:workoutId', getWorkoutById)
  .post('/', createNewWorkout)
  .patch('/:workoutId', updateWorkoutById)
  .delete('/:workoutId', deleteWorkoutById)


module.exports = router