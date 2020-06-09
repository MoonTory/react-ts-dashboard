import React, { useState, useEffect } from 'react';

import { AuthContext } from './Context';

const localToken = localStorage.getItem('LOCAL_TOKEN');
const localUser = localStorage.getItem('LOCAL_USER');

function simulateAPICall() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
}

export interface Props {
	children: React.ReactNode;
}
export const AuthProvider: React.FC<Props> = ({ children }) => {
	const [isAuth, setIsAuth] = useState(localToken ? true : false);
	const [token, setToken] = useState(localToken ? localToken : undefined);
	const [isLogginIn, setIsLogginIn] = useState(false);

	const login = async (email: string, password: string) => {
		try {
			setIsLogginIn(true);

			await simulateAPICall();

			setIsAuth(true);
			setToken('');
			// Setting 'token' into local storage so that it persists on the user's device.
			setIsLogginIn(false);
		} catch (error) {
			setIsAuth(false);
			setIsLogginIn(false);
		}
	};

	const logout = async () => {
		localStorage.removeItem('LOCAL_USER');
		localStorage.removeItem('LOCAL_TOKEN');
		setIsAuth(false);
		setToken(undefined);
	};

	useEffect(() => {}, []);

	return (
		<AuthContext.Provider
			value={{
				token: token,
				isAuth: isAuth,
				isLogginIn: isLogginIn,
				login: login,
				logout: logout
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
