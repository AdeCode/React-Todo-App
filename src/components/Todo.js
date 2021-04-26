import React, {useState} from 'react'

export default function Todo({todo, index}) {

    const [todos, setTodos] = useState([
        {
            text: 'Learn about React',
            isCompleted: false
        },
        {
            text: 'Go for Jumat prayer',
            isCompleted: false
        },
        {
            text: 'Build a cool React app',
            isCompleted: false
        }
    ]);
    return (
        <div className="todo">
            <h1>My Todos:</h1>   
            {todo.text}        
        </div>
    )
}
