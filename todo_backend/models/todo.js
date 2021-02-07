const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false);

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        minlength: 5,
        required: true
        },
    important: Boolean,
    done: Boolean
})

todoSchema.plugin(uniqueValidator)

todoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Todo', todoSchema)