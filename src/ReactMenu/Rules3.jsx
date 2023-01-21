import React from "react";
import ITQ from "../images/ITQ.png";

const Rules3 = () => {
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
								<img src={ITQ} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
									SOUND ENGINEER 
									</h5>
									<h6>Registration fee is:<br/>
									 Per head:-50/- <br/>
									 For Team(2 members):-100/-</h6>
									<p class="card-text">
									Sound Engineer event consists of 3 rounds:
										<br />
										1.Identify Technical words from given audio clip ( includes songs and dialogues) . <br />
										2.Teammate-1 having headset on with music playing  has to guess the technical word given to Teammate-2
										<br /> 3. Similar to round 1 with a little high difficulty level ( tentatively)
										</p>
									<a
										href="https://forms.gle/s9eZBPNcFioLQHGq5"
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
export default Rules3;
