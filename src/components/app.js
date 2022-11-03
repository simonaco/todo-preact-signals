import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Todo from '../routes/todo';

import createAppState from '../state/todo'
import TodoContext from "../state/todo/todoContext"

function App() { 
	return (
		<div id="app">
			<TodoContext.Provider value={createAppState()}>
				<Header />
				<Router>
					<Home path="/" />
					<Todo path="todo"/>
				</Router>
			</TodoContext.Provider>
		</div>
  )
}
export default App;
