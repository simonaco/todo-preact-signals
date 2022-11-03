import { h } from 'preact';
import { useContext } from "preact/hooks";
import TodoContext from '../../state/todo/todoContext';
import style from './style.css';

import {signal} from '@preact/signals'

const newcontextitem = signal("");
function Home() { 
	const {todos, completed} = useContext(TodoContext);
	
	const onInput = event => (newcontextitem.value = event.target.value)
	const addTodo = () => {
		todos.value = [...todos.value, { text: newcontextitem.value, completed: false }];
		newcontextitem.value = ""; // Reset input value on add
	}

	const removeTodo = (index) => {
		todos.value.splice(index, 1)
		todos.value = [...todos.value];
	}

	return (
	<div class={style.home}>
            <h1>TODO</h1>
            <input type="text" value={newcontextitem.value} onInput={onInput} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.value.map((todo, index)=> {
                    return (
                        <li>
                            <input 
                                type="checkbox" 
                                checked={todo.completed}
                                onInput={()=>{
                                    todo.completed = !todo.completed
                                    todos.value = [...todos.value]
                                }}
                            />
                            {todo.completed ? <s>{todo.text}</s> : todo.text}{' '}
                            <button onClick={() => removeTodo(index)}>X</button>
                        </li>
                    )
                })
                }
            </ul>
            <p>Completed count: {completed.value}</p>
        </div>
);
}

export default Home;
