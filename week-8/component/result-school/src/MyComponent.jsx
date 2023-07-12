import React, { useState } from 'react';

const getValue = () => 123;

export const MyComponent = () => {
	const date = new Date();
	const value = 123;
	const className = 'divElement';
	const [currentDate, setCurrentDate] = useState(new Date());
	const [obj, setObj] = useState({ a: 10, b: 20, c: 30 });

	// setObj({ a: 20, b: 20, c: 30 }); // change everything
	if (obj.a === 10) {
		setObj({ ...obj, a: 20 }); // change only a
	}

	setTimeout(() => {
		setCurrentDate(new Date());
	}, 1000);

	// useEffect(() => {
	// 	console.log(date);
	// }, []);

	// let obj1 = { a: 10 };
	// obj1.a = 20; // immutation
	// obj1 = { a: 20 };
	// const obj2 = obj1;
	// console.log(obj1 === obj2); //false

	
	return (
		<>
			<lable>Test text</lable>
			<div>{String(date)}</div>
			<div>{value}</div>
			<div
				className={className}
				style={{ width: '100px', marginTop: '20px' }}
			>
				{getValue()}
			</div>
			<div>{currentDate.toISOString().substring(11, 19)}</div>
			<div>{obj.a}</div>
		</>
	);
};
