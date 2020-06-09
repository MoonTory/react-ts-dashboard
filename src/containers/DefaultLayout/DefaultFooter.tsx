import React, { Fragment } from 'react';

const DefaultFooter = () => {
	return (
		<Fragment>
			<span>Copyright &copy; {new Date().getFullYear()} - (CTCI) Clube de Tiro e Caça Independência</span>
			<span className="ml-auto">
				Made with <i className="fab fa-react" /> & <i className="fab fa-node-js" /> by{' '}
				<a href="https://github.com/moontory">
					Gustavo Quinta - <i className="fab fa-github" />
				</a>
			</span>
		</Fragment>
	);
};

export default DefaultFooter;
