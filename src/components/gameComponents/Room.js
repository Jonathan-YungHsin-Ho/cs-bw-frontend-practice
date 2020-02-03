import React from 'react';

import { useDataContext } from '../../contexts/DataContext';

export default function Room() {
	const {
		data: { title, description },
	} = useDataContext();

	return (
		<div>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}
