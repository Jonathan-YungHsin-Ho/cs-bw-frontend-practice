import React from 'react';

export default function Dashboard({ playerInfo }) {
	return (
		<div>
			<h3>Dashboard</h3>
			<p>Player: {playerInfo.name}</p>
		</div>
	);
}
