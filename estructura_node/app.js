require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const { dbConnect } = require('./config/mongo')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.use('/api/v1/', require('./app/routes'))

dbConnect();
app.listen( PORT, () => console.log('API running on port', PORT) )