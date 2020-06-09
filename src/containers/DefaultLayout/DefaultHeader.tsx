import React, { Fragment } from 'react';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import avatar from '../../assets/img/avatars/6.jpg';
import logo from '../../assets/img/ctci-logo-full.svg';
import sygnet from '../../assets/img/ctci-compact.svg';

import { AuthConsumer } from '~/context';

interface Props {}
const DefaultHeader: React.FC<Props> = () => {
	return (
		<AuthConsumer>
			{({ logout }) => (
				<Fragment>
					<AppSidebarToggler className="d-lg-none" display="md" mobile />
					<AppNavbarBrand
						full={{ src: logo, width: 89, height: 30, alt: 'CoreUI Logo' }}
						minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
						onClick={() => console.log('Fire')}
						style={{ cursor: 'pointer' }}
					/>
					<AppSidebarToggler className="d-md-down-none" display="lg" />

					<Nav className="ml-auto" navbar>
						<UncontrolledDropdown nav direction="down">
							<DropdownToggle nav>
								<img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem header tag="div" className="text-center">
									<strong>Account</strong>
								</DropdownItem>
								<DropdownItem>
									<i className="fa fa-bell"></i> Updates<Badge color="info">42</Badge>
								</DropdownItem>
								<DropdownItem>
									<i className="fa fa-envelope"></i> Messages<Badge color="success">42</Badge>
								</DropdownItem>
								<DropdownItem>
									<i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge>
								</DropdownItem>
								<DropdownItem>
									<i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge>
								</DropdownItem>
								<DropdownItem header tag="div" className="text-center">
									<strong>Settings</strong>
								</DropdownItem>
								<DropdownItem>
									<i className="fa fa-user"></i> Profile
								</DropdownItem>
								<DropdownItem>
									<i className="fa fa-wrench"></i> Settings
								</DropdownItem>
								<DropdownItem>
									<i className="fas fa-dollar-sign"></i> Payments<Badge color="secondary">42</Badge>
								</DropdownItem>
								<DropdownItem>
									<i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									<i className="fas fa-shield-alt"></i> Lock Account
								</DropdownItem>
								<DropdownItem onClick={logout}>
									<i className="fa fa-lock"></i> Logout
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					<AppAsideToggler className="d-md-down-none" />
					<AppAsideToggler className="d-lg-none" mobile />
				</Fragment>
			)}
		</AuthConsumer>
	);
};

export default DefaultHeader;
