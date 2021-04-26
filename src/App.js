import React, {useState} from 'react';
//import Todo from './components/Todo';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';

function Home(){
    return <h2>Welcome to our Home</h2>;
}

function About(){
    return <h2>Welcome to our About Page</h2>;
}



function Todo({todo, index, completeTodo, removeTodo}){
    return(
       <div>
          
            <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} 
            className="todo">
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>X</button>
            </div>
            </div>
        </div>
    )
}








function App() {
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

    const addToDo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    
    return (
        <div className="app">
            <Navigation />
            <div className="todo-list">
                <h1>My todos: </h1>
               {todos.map((todo, index) => (
                   <Todo 
                    Key = {index}
                    index = {index}
                    todo = {todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                   />
               ))}
                <TodoForm addTodo={addToDo}/>
            </div>
        </div>
    );
}


export default App;
