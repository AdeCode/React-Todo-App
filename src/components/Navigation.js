import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//import TodoForm from './components/TodoForm';


function Home(){
    return <h2>Welcome to our Home</h2>;
}

function About(){
    return <h2>Welcome to our About Page</h2>;
}

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    
        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            addTodo(value);
            setValue('');
        }
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="input" 
                    value={value} 
                    placeholder = "Add Todo..."
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        )
   
    
}

export default function Navigation() {
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
    return (
        <div>
            <Router>
               <div>
                   <nav>
                       <ul>
                           <li>
                               <Link to="/">Home</Link>
                           </li>
                           <li>
                               <Link to="/about">About</Link>
                           </li>
                           <li>
                               <Link to="/todo">Todo</Link>
                           </li>
                       </ul>
                   </nav>

                   <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/todo">
                            <TodoForm addTodo={addToDo}/>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
               </div>
           </Router>
           
        </div>        
    )
}
