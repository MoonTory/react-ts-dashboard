import React, { Suspense } from 'react';
import { Redirect, Route, Switch, RouteComponentProps } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
	AppAside,
	AppFooter,
	AppHeader,
	AppSidebar,
	AppSidebarFooter,
	AppSidebarForm,
	AppSidebarHeader,
	AppSidebarMinimizer,
	AppBreadcrumb2 as AppBreadcrumb,
	AppSidebarNav2 as AppSidebarNav
} from '@coreui/react';

import { Preloader } from '~/components';
// routes config &  sidebar nav config
import { routes, navigation } from '~/routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

interface Props extends RouteComponentProps {}
const DefaultLayout: React.FC<Props> = (props) => {
	const loading = () => <i className="fa fa-spinner fa-spin" />;

	return (
		<div className="app">
			<AppHeader fixed>
				<Suspense fallback={loading()}>
					<DefaultHeader />
				</Suspense>
			</AppHeader>
			<div className="app-body">
				<AppSidebar fixed display="lg">
					<AppSidebarHeader />
					<AppSidebarForm />
					<Suspense fallback={loading()}>
						<AppSidebarNav navConfig={navigation} {...props} router={router} />
					</Suspense>
					<AppSidebarFooter />
					<AppSidebarMinimizer />
				</AppSidebar>
				<main className="main">
					<AppBreadcrumb appRoutes={routes} router={router} />
					<Container fluid>
						<Suspense fallback={<Preloader />}>
							<Switch>
								{routes.map((route: any, idx) => {
									return route.component ? (
										<Route
											key={idx}
											path={route.path}
											exact={route.exact}
											render={(props) => <route.component {...props} />}
										/>
									) : null;
								})}
								<Redirect from="/" to="/dashboard" />
							</Switch>
						</Suspense>
					</Container>
				</main>
				<AppAside fixed>
					<Suspense fallback={loading()}>
						<DefaultAside />
					</Suspense>
				</AppAside>
			</div>
			<AppFooter>
				<Suspense fallback={loading()}>
					<DefaultFooter />
				</Suspense>
			</AppFooter>
		</div>
	);
};

export default DefaultLayout;
