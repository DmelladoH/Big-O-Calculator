function errorHandler (err, req, res, next) {
  console.error(err)

  res.status(err.status || 500)

  res.json({
    error: {
      message: err.message
    }
  })
}

module.exports = errorHandler
