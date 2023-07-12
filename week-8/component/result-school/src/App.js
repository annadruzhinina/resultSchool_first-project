import logo from './logo.svg';

import { MyComponent } from './MyComponent.jsx';
import { Map } from './Map.jsx';
import { OnClick } from './OnClick';

import styles from './App.module.css';

export const App = () => {
	const onClick = () => {
		console.log(123);
	};
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				{/* <MyComponent type="test" value="123" />
				<Map /> */}
				<OnClick />
			</header>
		</div>
	);
};
