import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<div className="trafficLight">
			<div className="red light">a</div>
			<div className="yellow light">b</div>
			<div className="green light">c</div>
		</div>
	);
};

export default Home;
