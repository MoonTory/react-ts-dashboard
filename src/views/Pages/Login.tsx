import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Row } from 'reactstrap';

import { AuthConsumer } from '~/context';
import { LoginForm } from '~/components';
import logo from '~/assets/img/ctci-compact.svg';

interface Props {}
const Login: React.FC<Props> = () => {
	return (
		<AuthConsumer>
			{({ login, isLogginIn, isAuth }) =>
				isAuth ? (
					<Redirect to="/" />
				) : (
					<div className="app flex-row align-items-center">
						<Container>
							<Row className="justify-content-center">
								<Col md="8">
									<CardGroup>
										<Card className="p-4">
											<CardBody>
												<Form>
													<div className="row">
														<div className="col-6">
															<h1>Login</h1>
														</div>
														<div className="col-6 d-flex justify-content-end">
															<img height="64" width="64" src={logo}></img>
														</div>
													</div>
													<p className="text-muted">Access your account</p>
													<LoginForm
														isLoggingIn={isLogginIn}
														onForgotPassword={() => console.log('fire')}
														onSubmit={values => login(values.email, values.password)}
													/>
												</Form>
											</CardBody>
										</Card>
										<Card className="text-white bg-dark py-5 d-md-down-none" style={{ width: '44%' }}>
											<CardBody className="text-center">
												<div>
													<h2>Register</h2>
													<p>
														Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequuntur
														obcaecati laborum veritatis aperiam fugit, nobis similique magni minus ipsum?
													</p>
													<Button color="primary" className="mt-3" active tabIndex={-1}>
														Register
													</Button>
												</div>
											</CardBody>
										</Card>
									</CardGroup>
								</Col>
							</Row>
						</Container>
					</div>
				)
			}
		</AuthConsumer>
	);
};

export default Login;
