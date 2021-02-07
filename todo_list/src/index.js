import React from "react";
import ReactDOM from 'react-dom';
import "./index.css"
import TodoList from "./TodoList";

let destination = document.getElementById("container");

ReactDOM.render(
        <TodoList />,
    destination
);