import React from 'react';

export default function Dashboard({ playerInfo }) {
	return (
		<div>
			<h2>Dashboard</h2>
			<p>Player: {playerInfo.name}</p>
		</div>
	);
}
