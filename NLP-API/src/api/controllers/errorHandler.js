export const notFound = (req, res, next) => {
  const err = new Error('Route Not Found')
  err.status = 404
  next(err)
}

export const error = (err, req, res, next) => {
  res.status(err.status || 400).json({
    message: err.message || 'Internal server error',
    error: err,
  })
}
