import React from 'react';

import { INotificationSystem } from './interfaces';

export const NotificationContext = React.createContext<INotificationSystem | null>(null);
