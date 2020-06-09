import React from 'react';

interface AuthState {
	token?: string;
	isAuth: boolean;
	isLogginIn: boolean;
	login: (email: string, password: string) => void;
	logout: () => void;
}

const initialState: AuthState = {
	token: undefined,
	isAuth: false,
	isLogginIn: false,
	login: () => {},
	logout: () => {}
};

const AuthContext = React.createContext<AuthState>(initialState);

const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthState, AuthConsumer };
