import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

export default function Dashboard() {
	const {
		data: { name },
	} = useDataContext();

	return (
		<div>
			<h3>Dashboard</h3>
			<p>Player: {name}</p>
		</div>
	);
}
