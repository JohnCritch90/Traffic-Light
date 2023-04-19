import React, { useState } from "react";
import Light from ".//light.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	const colors = ["red", "yellow", "green"];
	const [lit, setLit] =  useState("red");
	return (
		<div>
			<div className="lightTop"></div>
			<div className="traffic-light">
				{colors.map ((color)=> {
					return <Light color={color} lit={lit} setLit={setLit} />;
				})}
			</div>
		</div>
	);
};

export default Home;
