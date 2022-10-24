const { v4: uuid } = require('uuid')
const Workout = require('../database/Workout')

const getAllWorkouts = () => {
  return Workout.getAllWorkout()
}
const getWorkoutById = () => {
  return
}
const createNewWorkout = ( newWorkout ) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }

  const createdWorkout = Workout.createNewWorkout( workoutToInsert )
  return createdWorkout
}
const updateWorkoutById = () => {
  return
}
const deleteWorkoutById = () => {
  return
}

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById
}