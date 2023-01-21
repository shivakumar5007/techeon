import React from "react";
import Rc from "../images/Rc.jpg";


const Rules4 = () => {
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
								<img src={Rc} class="card-img-top" alt="..." />
								<div class="card-body">
									<h5 class="card-title">PAPER PRESENTATION</h5>
									<h6>Single Author Rs. 400/- & for every additional author Rs. 200 extra</h6>
									<p class="card-text">
										1.The abstract should be sent to the mail id before atleast 1 day before the event to the given mail id.

										<br />
										2. The paper should be in IEEE format.

										<br />
										
										
									</p>
									<a
										href="https://forms.gle/kmf1LSja4zUgH6886"
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
export default Rules4;
