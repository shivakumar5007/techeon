import React from "react";
import CD from "../images/CD.jpg";


const Rules10 = () => {
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
								<img src={CD} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
										<b>
											REVERSE CODING
										</b>
									</h5>
									<h6>Event Registration fee: <br/>
									per head Rs.50/- <br/>
									 Rs.150/- for participating as a team of two people.</h6>
									<p class="card-text">
										You will be given the output and You have to write the code for it. 
									</p>
									<a
										href="https://forms.gle/fSS96Fuo67G1Sc959"
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
export default Rules10;
