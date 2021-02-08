import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api/todos';

const getTodos = () => {
    return axios.get(BASE_URL)
}

const createTodo = (todo) => {
    const request =  axios.post(BASE_URL, todo)
    return request.then(response => response.data)

}
const updateTodo = (id, todo) => {
    const request =  axios.put(`${BASE_URL}/${id}`, todo)
    return request.then(response => response.data)
}

const todoServices = {
    getTodos,
    createTodo,
    updateTodo
}

export default todoServices