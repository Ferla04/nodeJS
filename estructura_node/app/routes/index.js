const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${ __dirname }`

const removeExtension = ( fileName ) => {
  return fileName.split('.').shift()
}

// Crear rutas con los archivos
fs.readdirSync( pathRouter ).filter((file) => {
  const fileWitoutExt = removeExtension( file )
  const skip = ['index'].includes( fileWitoutExt )

  if(!skip){
    router.use(`/${fileWitoutExt}`, require(`./${fileWitoutExt}`)) //* localhost/users
    //console.log( 'Cargar Ruta--->', fileWitoutExt )
  }

})

router.get('*', ( req, res ) => {
  res.status(404).send({ error: 'Not found' })
})

module.exports = router
