import React from 'react';
import SpinnerIcon from 'react-loader';

interface Props {
	spinColor: string;
	spinConfig?: any;
	spinAlignment: string;
}

export const Spinner: React.FC<Props> = ({
	spinColor = '#fff',
	spinConfig = {
		length: 4,
		lines: 15,
		radius: 2,
		width: 2
	},
	spinAlignment = 'left',
	...rest
}) => {
	const style: React.CSSProperties = {
		display: 'inline-block',
		height: '11px',
		position: 'relative',
		width: '16px'
	};

	const spinAlignmentStyle: React.CSSProperties = {
		display: 'inline-block',
		float: 'left',
		padding: '0 1rem 0 0'
	};

	return (
		<div style={spinAlignmentStyle} {...rest}>
			<div style={style}>
				<SpinnerIcon {...spinConfig} color={spinColor} loaded={false} />
			</div>
		</div>
	);
};
