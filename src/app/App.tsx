import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Preloader } from '~/components';
import { ProtectedRoute } from '~/routes';
import { NotificationProvider } from '~/notification';
import { AuthProvider } from '~/context';

import './App.scss';

const DefaultLayout = React.lazy(() => import('../containers/DefaultLayout'));

const Login = React.lazy(() => import('../views/Pages/Login'));
const Register = React.lazy(() => import('../views/Pages/Register'));

interface Props {}
const App: React.FC<Props> = () => {
	return (
		<React.Suspense fallback={<Preloader />}>
			<HashRouter>
				<NotificationProvider>
					<AuthProvider>
						<Switch>
							<Route exact path="/login" render={props => <Login {...props} />} />
							<Route exact path="/register" render={props => <Register {...props} />} />
							<ProtectedRoute path="/" component={DefaultLayout} />
						</Switch>
					</AuthProvider>
				</NotificationProvider>
			</HashRouter>
		</React.Suspense>
	);
};

export default App;
