import React, { useState, useContext } from 'react';
import * as yup from 'yup';
import { Button, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import { ButtonLoader } from '~/components';

interface Props {
	isLoggingIn: boolean;
	onSubmit: (values: any) => void;
	onForgotPassword: () => void;
}

const emailValidationSchema = yup.string().email();

export const Form: React.FC<Props> = ({ isLoggingIn, onSubmit, onForgotPassword }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleClick = () => {
		if (emailValidationSchema.isValidSync(email) && email.length !== 0) onSubmit({ email, password });
	};

	return (
		<>
			<InputGroup className="mb-3">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<i className="icon-user"></i>
					</InputGroupText>
				</InputGroupAddon>
				<Input
					invalid={!emailValidationSchema.isValidSync(email)}
					bsSize="sm"
					type="email"
					placeholder="E-mail"
					autoComplete="username"
					onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
				/>
			</InputGroup>
			<InputGroup className="mb-4">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<i className="icon-lock"></i>
					</InputGroupText>
				</InputGroupAddon>
				<Input
					bsSize="sm"
					type="password"
					placeholder="Senha"
					autoComplete="current-password"
					onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
				/>
			</InputGroup>
			<Row>
				<Col xs="6">
					<ButtonLoader
						small
						pullRight
						type="submit"
						color="primary"
						spinColor="#fff"
						loading={isLoggingIn}
						disabled={isLoggingIn}
						onClick={handleClick}
					>
						Login
					</ButtonLoader>
				</Col>
				<Col xs="6" className="text-right">
					<Button onClick={onForgotPassword} color="link" className="px-0">
						Forgot password?
					</Button>
				</Col>
			</Row>
		</>
	);
};
