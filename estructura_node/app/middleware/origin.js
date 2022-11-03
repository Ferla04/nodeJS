const checkOrigin = ( req, res, next ) => {
  //agregar en el header authorization -> Bearer 12345

  const token = req.headers.authorization.split(' ').pop()
  if( token === '12345' ){
    next()
  }else{
    res.status(409).send({ error: "You don't have authorization" })
  }
}

module.exports = checkOrigin