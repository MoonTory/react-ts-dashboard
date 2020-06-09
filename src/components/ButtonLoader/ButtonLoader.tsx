import React from 'react';
import { Spinner } from './Spinner';
import { CustomButton, ButtonColor } from '../CustomButton';

interface Props {
	disabled: boolean;
	icon?: React.ReactNode;
	loading: boolean;
	spinColor: string;
	spinAlignment?: string;
	variant?: string;
	onClick?: any;
	type: any;
	pullRight?: any;
	color?: ButtonColor;
	small?: any;
	className?: string;
	style?: React.CSSProperties;
	fill?: any;
}

export const ButtonLoader: React.FC<Props> = ({
	children = null,
	disabled = false,
	icon = null,
	loading = false,
	spinColor = '#fff',
	spinAlignment = 'left',
	variant = 'primary',
	onClick,
	type,
	pullRight,
	small,
	className,
	style,
	...rest
}) => {
	function renderIcon() {
		if (loading) {
			return <Spinner spinColor={spinColor} spinAlignment={spinAlignment} />;
		}

		return icon;
	}

	const buttonDisabled = disabled || loading;

	if (className)
		return (
			<div style={style} className={className}>
				<CustomButton
					small={small}
					fill
					pullRight={pullRight}
					type={type}
					onClick={onClick}
					disabled={buttonDisabled}
					{...rest}
				>
					{renderIcon()} {children}
				</CustomButton>
			</div>
		);

	return (
		<>
			<CustomButton
				small={small}
				fill
				pullRight={pullRight}
				type={type}
				onClick={onClick}
				disabled={buttonDisabled}
				{...rest}
			>
				{renderIcon()} {children}
			</CustomButton>
		</>
	);
};
