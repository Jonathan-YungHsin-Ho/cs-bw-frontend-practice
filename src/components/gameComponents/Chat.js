import React from 'react';

export default function Chat({ players }) {
	return (
		<div>
			<h3>Chat</h3>
			<ul>
				{players.map(player => (
					<li key={player}>{player}</li>
				))}
			</ul>
		</div>
	);
}
