import styles from "./TodoItem.module.css"
import { FaCheck,FaEdit,FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo }) => {
	return (
		<li className={styles.list}>
			<div className={styles.listItem}>{todo.title}</div>
			<div>
				<FaCheck>Check</FaCheck>
				<FaEdit>Edit</FaEdit>
				<FaTrash>Delete</FaTrash>
			</div>
		</li>
	);
};

export default TodoItem;
