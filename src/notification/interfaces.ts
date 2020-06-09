import React from 'react';

export interface INotificationSystem {
	addNotification(notification: Notification): Notification;
	removeNotification(uidOrNotification: number | string | Notification): void;
	clearNotifications(): void;
	editNotification(uidOrNotification: number | string | Notification, newNotification: Notification): void;
}

export type CallBackFunction = (notification: Notification) => void;

export interface Notification {
	title?: string | JSX.Element;
	message?: string | JSX.Element;
	level?: 'error' | 'warning' | 'info' | 'success';
	position?: 'tr' | 'tl' | 'tc' | 'br' | 'bl' | 'bc';
	autoDismiss?: number;
	dismissible?: boolean;
	action?: ActionObject;
	children?: React.ReactNode;
	onAdd?: CallBackFunction;
	onRemove?: CallBackFunction;
	uid?: number | string;
}

export interface ActionObject {
	label: string;
	callback?: () => void;
}

export type Notifications = Notification[];
