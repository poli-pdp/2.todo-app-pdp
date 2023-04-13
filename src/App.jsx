import Header from './components/Header';
import styles from './App.module.css';
import Form from './components/Form';
import { useState } from 'react';
import TodoList from './components/TodoList';
const App = () => {
	const [inputTodo, setInputTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [edit, setEdit] = useState(null);
	return (
		<div className={styles.container}>
			<div className={styles.appwrapper}>
				<div>
					<Header />
				</div>
				<div>
					<Form
						inputTodo={inputTodo}
						setInputTodo={setInputTodo}
						todos={todos}
						setTodos={setTodos}
						edit={edit}
						setEdit={setEdit}
					/>
				</div>
				<div>
					<TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
				</div>
			</div>
		</div>
	);
};

export default App;
