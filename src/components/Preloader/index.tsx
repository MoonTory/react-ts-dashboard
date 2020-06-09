import React from 'react'

interface Props {}
export const Preloader: React.FC<Props> = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 p-0">
					<div className=" min-vh-100 text-center m-0 d-flex flex-column justify-content-center">
						<i  className="fas fa-4x fa-circle-notch fa-spin" />
					</div>
				</div>
			</div>
		</div>
	)
}
