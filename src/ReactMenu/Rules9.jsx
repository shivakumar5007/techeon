import React from "react";
import LG from "../images/CC.jpg";

const Rules9 = () => {
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
								<img src={LG} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
										<b>
											Technical Quiz
										</b>
									</h5>
									<p class="card-text">
										<u>
											<b>Rules</b>
										</u>
										<br />
										1.Each participant must have a PC with stable internet
										connectivity. <br />
										2.Must be join in event time. Question will be allotted to
										each participant.
										<br />
										3.The program will be given in a programming language.
										<br />
										4. Given program should be converted into other programming
										language based on participant choice.
										<br />
										5.Two questions will be given to each participant that must
										be solved in a given time.
										<br />
										6.Participant must show the required output in given time
										only. <br />
										7.They are not allowed to exit the meeting during the event
										time.
										<br /> 8.They should not cheat during the session and
										maintain rules and regulations as mention above.
									</p>
									<a
										href="https://docs.google.com/forms/d/1TSwCU_H8cMC-Z4IZEJr1-S7npCucnfVzMXENOmR13vU/edit"
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
export default Rules9;
