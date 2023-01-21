import React from "react";
import ind from "../images/inpdp.png";


const Rules2 = () => {
	return (
		<>
			<div className="my-5">
				<h1 className="text-center">Rules & guidelines</h1>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-10 mx-auto">
						<div classNameName="card mb-3" style={{ maxWidth: "540px" }}>
							<div class="card mb-6 mx-auto">
								<img src={ind} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">LAN GAMING </h5>
									<h6>Per head:-50/- <br />
									For squad(Five):- 250/-</h6>
									<p class="card-text">
										<b> CALL OF DUTY (TDM ONLY) </b>
										<br /> 1. Every one must bring their mobile
										<br /> 2. You can bring your squad.
										<br /> 4. Wi-fi will be provided if required.	
									</p>
									<a
										href="https://forms.gle/ky2W284TMRmLgyJZ6"
										className="btn btn-primary"
									>
										Register
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Rules2;
