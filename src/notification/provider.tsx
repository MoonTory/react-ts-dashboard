import React, { FunctionComponent, useState, useEffect } from 'react';
import NotificationSystem from 'react-notification-system';

import { style } from './styles';
import { INotificationSystem } from './interfaces';
import { NotificationContext } from './context';

interface Props {}

export const NotificationProvider: FunctionComponent<Props> = ({ children }) => {
	const ref = React.createRef<INotificationSystem>();
	const [context, setContext] = useState<INotificationSystem | null>(null);

	useEffect(() => {
		if (ref.current) {
			setContext(ref.current as INotificationSystem);
		}
	}, []);

	return (
		<NotificationContext.Provider value={context}>
			<NotificationSystem ref={ref} style={style} />
			{children}
		</NotificationContext.Provider>
	);
};
