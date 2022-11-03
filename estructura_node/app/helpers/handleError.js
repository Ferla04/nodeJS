const httpError = ( res, err ) => {
  console.log( err )
  res.status(500).send({ error: 'Something wrong happend' })
}

module.exports = httpError