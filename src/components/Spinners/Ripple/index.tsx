import React, { FunctionComponent } from 'react';

import './scss/Ripple.scss';

interface SpinnerProps {
	style?: any;
}

export const Ripple: FunctionComponent<SpinnerProps> = ({ style }) => {
	return (
		<div style={style ? style : null} className="lds-ripple">
			<div></div>
			<div></div>
		</div>
		// <div style={style ? style : null} className="lds-ellipsis">
		// 	<div />
		// 	<div />
		// 	<div />
		// 	<div />
		// </div>
	);
};
