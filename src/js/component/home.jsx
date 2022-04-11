// import React from "react";
// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
// const Home = () => {
// 	const [counter, countUp] = useState(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			console.log();
// 		}, 1000);
// 		return () => clearInterval(interval);
// 	}, []);
// 	return (
// 		<div>
// 			<h1 className="text-center mt-5">Simple Counter</h1>
// 			<h2>{counter} seconds</h2>
// 			<p
// 				className="seconds text-center mt-5"
// 				style={{ fontSize: "5rem" }}
// 				onClick={() => countUp(counter + 1)}>
// 				⌛
// 			</p>
// 			<a href="#" className="btn btn-success">
// 				If you see this green button... bootstrap is working...
// 			</a>
// 			<p>
// 				Made by{" "}
// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 				love!
// 			</p>
// 		</div>
// 	);
// };

// export default Home;
