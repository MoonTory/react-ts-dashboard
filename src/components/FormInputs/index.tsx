import React, { FunctionComponent } from 'react';
import { FormGroup, Label, Input, Row, InputGroup } from 'reactstrap';

type bsSize = 'sm' | 'small' | 'lg' | 'large';

interface IFormInputsProps {
	nCols: string[];
	properties: FieldGroupProps[];
}

interface FieldGroupProps {
	label?: string;
	timeFormat?: boolean;
	type?: string;
	name?: string;
	bsClass?: string;
	bsSize?: bsSize;
	componentClass?: string;
	options?: any[];
	disabled?: boolean;
	defaultValue?: any;
	placeholder?: any;
	multiple?: any;
	value?: any;
	locale?: string;
	component?: any;
	small?: any;
	dateInputProps?: any;
	onChange?: (e: React.FormEvent<HTMLInputElement> | any) => void | any;
}

function FieldGroup({ label, small, dateInputProps, ...props }: any) {
	return (
		<FormGroup>
			{label ? <Label>{label}</Label> : null}
			{props.type === 'select' ? (
				<InputGroup size="sm">
					<Input type="select" {...props}>
						{props.options.map((option: any, key: number) => {
							return <option key={key}>{option}</option>;
						})}
					</Input>
				</InputGroup>
			) : props.component ? (
				<InputGroup size="sm">
					<props.component inputProps={dateInputProps} {...props} />
				</InputGroup>
			) : (
				<InputGroup size="sm">
					<Input {...props} />
				</InputGroup>
			)}
		</FormGroup>
	);
}
export const FormInputs: FunctionComponent<IFormInputsProps> = props => {
	const makeRow = () => {
		let row: JSX.Element[] = [];
		for (let i = 0; i < props.nCols.length; i++) {
			row.push(
				<div key={i} className={props.nCols[i]}>
					<FieldGroup {...props.properties[i]} />
				</div>
			);
		}
		return row;
	};
	return (
		<Row>
			{makeRow().map((row, _) => {
				return row;
			})}
		</Row>
	);
};
