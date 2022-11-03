const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')

const getItems = async ( req, res ) => {
  try{
    const listAll = await userModel.find({}) 
    res.send({ data: listAll })
  
  }catch( err ){
    httpError( res, err )
  }
}

const getItem = ( req, res ) => {
  
}

const createItem = async ( req, res ) => {
  try{
    const { name, age, email } = req.body
    const resDatail = await userModel.create({
      name, age, email
    })
    res.send({ data: resDatail })
  
  }catch( err ){
    httpError( res, err )
  }
  
}

const updateItem = ( req, res ) => {
  
}

const deleteItem = ( req, res ) => {
  
}


module.exports = {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
}