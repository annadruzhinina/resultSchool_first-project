import React, { useState } from 'react';
import styles from './MyComponent.module.css';

// export function OnClick() {
// 	const [value, setValue] = useState(0);
// 	const [text, setText] = useState(true);

// 	const onClick = (event) => {
// 		// анкапливаем новое значение
// 		setValue((updatedValue) => updatedValue + 1);
// 		setValue((updatedValue) => updatedValue + 1);
// 		setValue((updatedValue) => updatedValue + 1);
// 		// setValue(value + 1);
// 		console.log(event);
// 	};

// 	return (
// 		<>
// 			 <div>{value}</div>
// 			<button onClick={onClick}>+1</button>
// 		</>
// 	);
// }

export function OnClick() {
	// const [showText, setShowText] = useState(true);
	const [showRedText, setShowRedText] = useState(false);

	const onClick = (event) => {
		setShowRedText(!showRedText);
	};

	const text = (
		<div className={showRedText ? styles.red : styles.white}>Text</div>
	);

	return (
		<>
			{text}
			<button onClick={onClick}>Change color of texts</button>
		</>
	);
}
