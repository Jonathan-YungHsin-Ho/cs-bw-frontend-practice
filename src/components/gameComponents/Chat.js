import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

export default function Chat() {
	const {
		data: { players },
	} = useDataContext();

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
