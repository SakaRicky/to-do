todosRouter = require('express').Router()
const logger = require('../utils/logger')
const Todo = require('../models/todo')

todosRouter.get('/', (request, response) => {
    Todo.find({})
        .then(todos => response.json(todos))
        .catch(error => next(error))
})

todosRouter.get('/:id', (request, response) => {
    Todo.findById(request.params.id)
        .then(todos => response.json(todos))
        .catch(error => next(error))
})

todosRouter.post('/', (request, response, next) => {
    const body = request.body

    const todo = Todo(body)

    todo.save()
        .then(todo => response.json(todo))
        .catch(error => next(error))
})

todosRouter.put('/:id', (request, response, next) => {
    const id = request.params.id
    const body = request.body

    Todo.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(updatedTodo => response.json(updatedTodo))
        .catch(error => next(error))
})

todosRouter.delete('/:id', (request, response, next) => {
    const id = request.params.id

    Todo.findByIdAndRemove(id)
        .then(updatedTodo => response.json(updatedTodo))
        .catch(error => next(error))
})

module.exports = todosRouter