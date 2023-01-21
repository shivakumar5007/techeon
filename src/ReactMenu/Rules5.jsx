import React from "react";
import wc from "../images/wc.jpg";

const Rules5 = () => {
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
								<img src={wc} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title"><b> TECHNICAL DUMB CHARADES </b> </h5>
									<h6>Event Registration Fee :<br/>
										Per Head : 50/-<br/>
										For Team : 100/- for 2 persons</h6>
									<p class="card-text">
										<br />
										1. It is a word Guessing game where there will be three participants who will make a team among themselves.
										<br />
										2.They will be given the technical word and they should guess the word through miming. 
										<br />
										3.One person should give the gestures and the other two should guess the title.
										<br />
									</p>
									<a
										href="https://forms.gle/c74TavL3oeFpr18H8"
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
export default Rules5;
