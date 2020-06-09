import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { AuthConsumer } from '~/context';

export const ProtectedRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
	<AuthConsumer>
		{({ isAuth }) => (
			<Route render={props => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)} {...rest} />
		)}
	</AuthConsumer>
);
