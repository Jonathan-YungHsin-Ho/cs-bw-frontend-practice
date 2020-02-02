import React from 'react';

export default function Room({ roomData }) {
	return (
		<div>
			<h3>{roomData.title}</h3>
			<p>{roomData.description}</p>
		</div>
	);
}
