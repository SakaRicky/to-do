import React, { useState, useEffect } from 'react';
import todoServices from './services/todo_services'

import Todo from './components/Todo/Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [todoText, setTodoText] = useState('')

    useEffect(() => {
        todoServices.getTodos()
             .then(response => {
                setTodos(response.data)
             })
    }, [])

    const todoTextHandler = (event) => {
        setTodoText(event.target.value);
    }

    const addTodoHandler = (event) => {
        event.preventDefault()
        const todo = {
            todo: todoText,
            important: false,
            done: false
        }
        todoServices.createTodo(todo)
                    .then(createdTodo => {
                        setTodos(todos.concat(createdTodo))
                        setTodoText("")
                    })
    }

    return (
        <div>
            <div className="row py-2 bg-primary">
                <h2>TodoList</h2>
            </div>
            <div className="row">
                <ul className="list-group pb-2">
                    {todos.map((todo, i) => {
                        return <Todo key={i} todo={todo} />
                    })}
                </ul>
                <div className="container-fluid pb-3">
                    <form onSubmit={addTodoHandler}>
                        <input placeholder="enter task" onChange={todoTextHandler} value={todoText}></input>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoList;