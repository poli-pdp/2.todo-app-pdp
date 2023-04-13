import { useEffect } from 'react';
import styles from './Form.module.css';
import uuid4 from 'uuid4';

const Form = ({ inputTodo, setInputTodo, todos, setTodos, edit, setEdit }) => {
	const handlerInput = ({ target }) => {
		setInputTodo(target.value);
	};
	const handlerSubmit = e => {
		e.preventDefault();
		if (edit) {
			updateTodoTitle(edit.id, inputTodo, edit.completed);
		} else {
			const newTodo = { id: uuid4(), title: inputTodo, completed: false };
			setTodos([...todos, newTodo]);
		}
		setInputTodo('');
	};
	const updateTodoTitle = (id, title, completed) => {
		const newTodos = todos.map(todo =>
			todo.id === id ? { id, title, completed } : todo
		);
		setTodos(newTodos);
		setEdit(null);
	};
	/*
	useEffect(() => {
		console.log('Por defecto');
	});
	useEffect(() => {
		console.log('Sin dependencias');
	}, []);
	*/
	useEffect(() => {
		if (edit) {
			setInputTodo(edit.title);
		} else {
			setInputTodo('');
		}
	}, [edit]);

	return (
		<form onSubmit={handlerSubmit}>
			<input
				type='text'
				placeholder='Enter to todo'
				name='task'
				value={inputTodo}
				onChange={handlerInput}
				className={styles.taskInput}
			/>
			<button type='submit' className={styles.button}>
				{edit ? 'Edit' : 'Add'}
			</button>
		</form>
	);
};

export default Form;
