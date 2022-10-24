const workServices = require('../services/workoutService')

const getAllWorkouts = ( req, res ) => {
  const allWorkouts = workServices.getAllWorkouts()
  res.send({ status: 'OK', data: allWorkouts })
}

const getWorkoutById = ( req, res ) => {
  const workout = workServices.getWorkoutById( req.params.workoutId )
  res.send(`Get workout ${ req.params.workoutId }`)
}

const createNewWorkout = ( req, res ) => {
  const { body } = req

  if(
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ){
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  }

  const createdWorkout = workServices.createNewWorkout( newWorkout )
  res.status(201).send({ status: 'OK', data: createdWorkout })
}

const updateWorkoutById = ( req, res ) => {
  const updatedWorkout = workServices.updateWorkoutById( req.params.workoutId )
  res.send(`Update workout ${ req.params.workoutId }`)
}

const deleteWorkoutById = ( req, res ) => {
  workServices.deleteWorkoutById( req.params.workoutId )
  res.send(`delete workout ${ req.params.workoutId }`)
}


module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById
}