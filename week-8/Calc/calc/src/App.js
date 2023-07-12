import logo from './logo.svg';
import React, { useState } from 'react';

import styles from './App.module.css';

export const App = () => {
	const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	const [input, setInput] = useState('');
	const [result, setResult] = useState('');
	const [error, setError] = useState(false);

	const handleInput = (event) => {
		setInput(event.target.value);
	};

	const calculateResult = () => {
		try {
			const calculatedResult = eval(input);
			setResult(calculatedResult);
			setInput(calculatedResult.toString());
			setError(false);
		} catch (error) {
			setResult('Error');
			setError(true);
		}
	};

	const clearInput = () => {
		setInput('');
		setResult('');
		setError(false);
	};

	const updateInput = (value) => {
		if (error) {
			// Reset the error state and input if an error occurred
			setInput(value);
			setError(false);
		} else {
			// Append the value to the input
			setInput(input + value);
		}

		// Reset the result and success state when + or - is clicked
		setResult('');
		setError(false);
	};

	const inputClass = error ? styles.error : result ? styles.success : '';

	return (
		<div className={styles.app}>
			<h1>Calculator</h1>
			<input
				type="text"
				value={input}
				onChange={handleInput}
				className={inputClass}
			></input>

			<h2>Result: {result}</h2>
			<div className={styles.btngrid}>
				{buttons.map((button, index) => (
					<button
						key={index}
						onClick={() => {
							setInput(input + button);
						}}
					>
						{button}
					</button>
				))}
				<button onClick={clearInput}>DEL</button>
				<button onClick={() => updateInput('+')}>+</button>
				<button onClick={() => updateInput('-')}>-</button>
				<button onClick={calculateResult}>=</button>
			</div>
		</div>
	);
};
