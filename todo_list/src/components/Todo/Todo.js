import React, {useState} from 'react'
import classes from './Todo.module.css'
import todoServices from '../../services/todo_services';

const Todo = ({todo}) => {
    const [important, setImportant] = useState(todo.important)
    const [done, setDone] = useState(todo.done)

    const doneClickHandler = () => {
        const changedTodo = {...todo, important: important, done: !done}
        todoServices.updateTodo(todo.id, changedTodo)
                    .then(modifiedTodo => {
                        setDone(modifiedTodo.done)
                    })
    }

    const classesToApply = done ? classes.done : ""

    return (
        <li className={"list-group-item "+classesToApply}>
            <input className="form-check-input me-1" type="checkbox" value={done} onClick={doneClickHandler}/>
            {todo.todo}
        </li>
    )
}

export default Todo;