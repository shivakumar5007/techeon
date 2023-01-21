import React from "react";
import SG from "../images/SG.png";

const Rules6 = () => {
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
								<img src={SG} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">
										<b>
											SCRIBBLE WORD
										</b>
									</h5>
									<h6>Event Registration fee<br/>
										For team:100/- (2 persons) <br/>
										Per head: 50/-</h6>
									<p class="card-text">
										It consists of 3 rounds
										<br/>
										1. Pictionary (Draw and Guess)
										<br /> 2. Jumble Words(Arrange the words in correct order)
										<br /> 3. Word Puzzle
									</p>
									<a
										href="https://forms.gle/HwzvpjbfHqCTgisz9"
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
export default Rules6;
