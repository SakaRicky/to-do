import React from 'react'

const todo = ({todo}) => {
    return (
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {todo.todo}
        </li>
    )
}

export default todo;