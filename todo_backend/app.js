const express = require('express')
const logger = require('./utils/logger')
const todosRouter = require('./controllers/todos')
const config = require('./utils/config')
let cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')

const app = express()

logger.info('connecting to', config.MONGO_URI)

const mongodbUrl = config.MONGO_URI

mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(result => {
            logger.info("Connected to MongoDB")
        })
        .catch(error => {
            logger.error(error)
        })

        
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/todos', todosRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app