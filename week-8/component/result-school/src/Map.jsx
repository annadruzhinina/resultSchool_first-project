import React from 'react';
import { useState } from 'react';

const products = [
	{ id: 'qwe', name: 'cup' },
	{ id: 'qw', name: 'spone' },
];

export const Map = () => {
	return (
		<ul>
			{products.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
		</ul>
	);
};
