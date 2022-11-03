const express = require('express')
const { createItem, deleteItem, getItem, getItems, updateItem } = require('../controllers/userController')
const checkOrigin = require('../middleware/origin')
const router = express.Router()

router
  .get('/', getItems)
  .get('/:id', getItem)
  .post('/', checkOrigin,createItem)
  .patch('/:id', updateItem)
  .delete('/:id', deleteItem)

module.exports = router