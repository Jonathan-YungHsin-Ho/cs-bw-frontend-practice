import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { useUserContext } from '../contexts/UserContext';
import { baseURL } from '../utils/baseURL';

export default function Login() {
	const { user, dispatch } = useUserContext();
	const history = useHistory();

	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	});

	const handleChange = e =>
		setCredentials({ ...credentials, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });

		axios
			.post(`${baseURL}/login/`, credentials)
			.then(res => {
				// console.log(res);
				localStorage.setItem('token', res.data.key);
				dispatch({ type: 'LOGIN_SUCCESS' });
				history.push('/game');
			})
			.catch(err => {
				// console.log(err);
				dispatch({ type: 'LOGIN_FAILURE' });
			});
	};

	return (
		<div>
			<h2>Login:</h2>
			{user.isLoading ? (
				<div>Loading...</div>
			) : (
				<form onSubmit={handleSubmit}>
					<label htmlFor='username'>Username: </label>
					<input
						type='text'
						id='username'
						name='username'
						placeholder='Username'
						value={credentials.username}
						onChange={handleChange}
					/>

					<label htmlFor='password'>Password: </label>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='Password'
						value={credentials.password}
						onChange={handleChange}
					/>

					<button type='submit'>Login</button>

					{user.error && <div>{user.error}</div>}
				</form>
			)}
		</div>
	);
}
