import React from "react";
import Paper from "./images/pp.png";
import { NavLink } from "react-router-dom";

const Contact = () => {
  
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
								<img src={Paper} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">Innovative poster design/ideas</h5>
									<p class="card-text">
									1. Individuals has to select their topic.
2. Topic must be innovative and useful.
3. Select your own topic and design the poster.
4. Say some useful points regarding the topic.
5. Present your innovative ideas on that topic.
									</p>
									<NavLink to="" class="btn btn-primary">
										Register
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;
