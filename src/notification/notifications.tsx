import React from 'react';
import { Map } from '@ctci/common';

import { Notification } from './interfaces';

interface NotificationsMap extends Map<Notification> {}

export const messages = {
	error: (message: string): Notification => {
		return {
			title: <span data-notify="icon" className="fas fa-exclamation-triangle" />,
			message: <strong>{message}</strong>,
			level: 'error',
			position: 'tc',
			autoDismiss: 5
		};
	},
	athleteCreated: (): Notification => {
		return {
			title: <span data-notify="icon" className="fas fa-check" />,
			message: <strong>Atleta criado com sucesso!</strong>,
			level: 'success',
			position: 'tc',
			autoDismiss: 5
		};
	}
};

// export const messages: NotificationsMap = {
// 	expired: {
// 		title: <span data-notify="icon" className="pe-7s-info" />,
// 		message: <strong>Atleta esta com filiacao vencida!</strong>,
// 		level: 'error',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	approved: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>Atleta aprovado com successo!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	approvedError: {
// 		title: <span data-notify="icon" className="pe-7s-info" />,
// 		message: <strong>Atleta ainda é um Filiado!</strong>,
// 		level: 'warning',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	updatePassword: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>Senha alterado com successo!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	confirmEmail: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>E-mail confirmado com successo!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	confirmEmailError: {
// 		title: <span data-notify="icon" className="pe-7s-info" />,
// 		message: <strong>E-mail já está confirmado!</strong>,
// 		level: 'warning',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	editFiliate: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>Dados de filiação editado com sucesso!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	editPersonal: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>Dados pessoais editado com sucesso!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	editAddress: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>Endereço editado com sucesso!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	editContact: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>Dados de contato editado com sucesso!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	createAthlete: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>Atleta criado com sucesso!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	uploadDocSuc: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>Upload de arquivo bem succedido!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	deleteDocSuc: {
// 		title: <span data-notify="icon" className="pe-7s-check" />,
// 		message: <strong>Exlusão de arquivo bem succedido!</strong>,
// 		level: 'success',
// 		position: 'tc',
// 		autoDismiss: 5
// 	},
// 	emitInvoiceInvalid: {
// 		title: <span data-notify="icon" className="pe-7s-info" />,
// 		message: <strong>Fatura só pode ser emitido com 'Status' de 'Dísponivel'</strong>,
// 		level: 'error',
// 		position: 'tc',
// 		autoDismiss: 5
// 	}
// };
