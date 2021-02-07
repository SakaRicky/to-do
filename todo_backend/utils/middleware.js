const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (request, response) => {
    return response.status(404).send("Unknwon endpoint")
}


const errorHandler = (error, request, response, next) => {
    if (error.name === 'CastError') {
        return response.status(400).send({error: 'Invalid id'})
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({error: error.message})
    }
}

module.exports = {requestLogger, unknownEndpoint, errorHandler}