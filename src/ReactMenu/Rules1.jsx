import React from "react";
import pp from "../images/pp.jpg"

const Rules1 = () => {
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
								<img src={pp} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">INNOVATIVE POSTER DESIGN RULES: </h5>
									<h6> 
									Single Author Rs. 400/- & for every additional author Rs. 200 extra</h6>
									<p class="card-text">
									1. Individuals has to select their topic. <br />
2. Topic must be innovative and useful. <br />
3. Select your own topic and design the poster. <br />
4. Say some useful points regarding the topic. <br />
5. Present your innovative ideas on that topic.
									</p>
									<a
										href="https://forms.gle/2FfL75h292vELB6z8"
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
export default Rules1;
