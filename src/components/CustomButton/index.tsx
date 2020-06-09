import React from 'react';
import { Button } from 'reactstrap';
import cx from 'classnames';

export type Sizes = 'xs' | 'xsmall' | 'sm' | 'small' | 'medium' | 'lg' | 'large';

export type ButtonColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'
	| 'link';

interface Props {
	fill?: any;
	className?: string;
	style?: any;
	simple?: any;
	pullRight?: any;
	block?: any;
	color?: ButtonColor;
	round?: any;
	small?: any;
	bsSize?: Sizes;
	type: any;
	disabled?: boolean;
	onClick?: (...args: any[]) => any | void;
}

export const CustomButton: React.FC<Props> = ({
	style,
	fill,
	simple,
	pullRight,
	round,
	block,
	onClick,
	disabled,
	small,
	...rest
}) => {
	const btnClasses = cx({
		'btn-fill': fill,
		'btn-simple': simple,
		'pull-right': pullRight,
		'btn-block': block,
		'btn-round': round,
		'btn-sm': small
	});

	return (
		<Button
			disabled={disabled}
			style={style ? style : null}
			onClick={onClick}
			className={btnClasses}
			{...rest}
		/>
	);
};
