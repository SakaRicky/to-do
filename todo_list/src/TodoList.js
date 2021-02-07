import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/todos')
             .then(response => {
                setTodos(response.data)
             })
    }, [])

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
                    <form>
                        <input placeholder="enter task"></input>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoList;