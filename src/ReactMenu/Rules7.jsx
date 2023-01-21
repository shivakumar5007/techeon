import React from "react";
import LG from "../images/LG.jpg";

const Rules7= () => {
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
										 TREASURE HUNT
										</b>
									</h5>
									<h6>Event Registration Fee:<br/>

Per Head : 50/-<br/>
For Team : 150/- for 3 persons</h6>
									<p class="card-text">
										1. Collect the clues<br/>
										2. Find the Treasure
										<br />
									</p>
									<a
										href="https://forms.gle/4XrwawvWSAnp5TKn8"
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
export default Rules7;
