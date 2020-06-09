import React, { useRef, useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalHeader } from 'reactstrap';

interface ICustomModalContextProps extends HTMLDivElement {}

const Context = React.createContext({} as ICustomModalContextProps);

export function ModalProvider({ children }) {
	const modalRef = useRef<HTMLDivElement>(null);
	const [context, setContext] = useState<any>();

	// make sure re-render is triggered after initial
	// render so that modalRef exists
	useEffect(() => {
		setContext(modalRef.current);
	}, []);

	return (
		<React.Fragment>
			<Context.Provider value={context}>{children}</Context.Provider>
			<div ref={modalRef} />
		</React.Fragment>
	);
}

export function CustomModal({ children, title, isOpen, toggle, ...props }) {
	const modalNode = useContext(Context);

	return modalNode
		? ReactDOM.createPortal(
				<Modal {...props} isOpen={isOpen} toggle={toggle}>
					<ModalHeader toggle={toggle}>{title}</ModalHeader>
					{children}
				</Modal>,
				modalNode
		  )
		: null;
}
