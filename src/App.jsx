import Header from './components/Header';
import styles from './App.module.css';
const App = () => {
	return (
		<div className={styles.container}>
			<div className={styles.appwrapper}>
				<div>
					<Header />
				</div>
			</div>
		</div>
	);
};

export default App;
