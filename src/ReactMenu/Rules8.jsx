import React from "react";
import TT from "../images/tt.jpg";

const Rules8 = () => {
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
								<img src={TT} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
										<b>
										Memory Vs Time
										</b>
									</h5>
									<h6>
										Event Registration Fee: <br/>
										Per head:50/- <br/>
										For Team(2 members)-100/- 
									</h6>
									<p class="card-text">
										
											<b>RULES:</b>
											This game consists of 3 rounds
										
										<br />
										1.Write technical words in a limited period of time according to the conditions given
										<br /> 2.Write the words according to the statement given in the limited period of time
										<br /> 3.Word continuity among the participant's
									</p>
									<a
										href="https://forms.gle/G8ckH5SSovFCc6rYA"
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
export default Rules8;
