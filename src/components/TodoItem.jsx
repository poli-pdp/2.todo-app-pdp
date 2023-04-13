import styles from './TodoItem.module.css';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo, completedTodo, setEdit }) => {
	return (
		<li className={styles.list}>
			<div
				className={`${styles.listItem} ${
					todo.completed ? styles.completed : ''
				}`}
			>
				{todo.title}
			</div>
			<div>
				<button onClick={() => completedTodo(todo)}>
					<FaCheck />
				</button>
				<button onClick={() => setEdit(todo)}>
					<FaEdit />
				</button>
				<button onClick={() => deleteTodo(todo)}>
					<FaTrash />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
