import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { useUserContext } from '../contexts/UserContext';

import Map from './gameComponents/Map';
import Room from './gameComponents/Room';
import Inventory from './gameComponents/Inventory';
import Dashboard from './gameComponents/Dashboard';
import Controls from './gameComponents/Controls';
import Chat from './gameComponents/Chat';

export default function Game() {
	const { user, dispatch } = useUserContext();

	const [roomData, setRoomData] = useState({
		id: '',
		title: '',
		description: '',
	});

	const [playerInfo, setPlayerInfo] = useState({
		name: '',
	});

	const [players, setPlayers] = useState([]);

	useEffect(() => {
		dispatch({ type: 'GET_DATA_START' });

		axiosWithAuth()
			.get('/adv/init/')
			.then(res => {
				// console.log(res.data);
				setRoomData({
					id: res.data.uuid,
					title: res.data.title,
					description: res.data.description,
				});
				setPlayerInfo({
					name: res.data.name,
				});
				setPlayers(res.data.players);
				dispatch({ type: 'GET_DATA_SUCCESS' });
			})
			.catch(err => {
				// console.log(err);
				dispatch({ type: 'GET_DATA_FAILURE' });
			});
	}, []);

	return (
		<div>
			<h2>Game Page</h2>
			<Map />
			<Room roomData={roomData} />
			<Inventory />
			<Dashboard playerInfo={playerInfo} />
			<Controls />
			<Chat players={players} />
		</div>
	);
}
