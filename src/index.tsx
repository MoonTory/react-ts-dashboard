import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './app';
import { ModalProvider } from './context';

import '~/assets/css/datetime.css';

ReactDOM.render(
	<HashRouter>
		<ModalProvider>
			<App />
		</ModalProvider>
	</HashRouter>,
	document.getElementById('root')
);
