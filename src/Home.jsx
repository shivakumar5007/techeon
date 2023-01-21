import React from "react";
import "./App.css";
import web from "../src/images/main p.jpg";
import Common from "./Common";
import sudhee from "./images/sudhee.mp4";

const Home = () => {
  return (
		<>
			<Common
				name="Chaitanya Bharathi Institute of Technology.
				    "
				imgsrc={web}
				visit="/service"
				btname="Get started"
			/>
			<div classname="row">
				<div className="col-md-4 mx-auto">
					<video className="mx-auto" width="350" height="250" controls>
						<source src={sudhee} type="video/mp4" />
						<source src="movie.ogg" type="video/ogg" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</>
	);
};

export default Home;
