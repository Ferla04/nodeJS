const mongoose = require('mongoose')

const dbConnect = () => {
  const DB_URI = process.env.DB_URI
  mongoose.connect(
    DB_URI, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    ( err, res ) => {
      if( !err ){
        console.log('*** successful database connection ***')
      }else{
        console.log('ERROR: connection to database: ', err)
      }
    }
  )
}

module.exports = { dbConnect }