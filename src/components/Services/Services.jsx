/** @format */

import React from "react";
import "./services.css";
const Services = (props) => {
	console.log(props.x);
	const styles = {
		backgroundColor: "rgb(138, 150, 150)",
		color: "black",
	};
	if (props.x) {
		styles.backgroundColor = "rgb(39, 43, 43)";
		styles.color = "gold";
	} else {
		styles.backgroundColor = "rgb(138, 150, 150)";
	}
	return (
		<div className='serv'>
			<div className='headx'>Services</div>
			<div className='serv-box'>
				<img src='src/images/web.png' alt='' className='serv-img' />
				<div className='xb' style={styles}>
					<div className='text'> Responsive WebDesigning</div>
					<span>
						iam creative and skilled at building responsive sites and web apps
						in a short delivery time
					</span>
				</div>
			</div>
			<div className='serv-box'>
				<img src='src/images/front.png' alt='' className='serv-img' />
				<div className='xb' style={styles}>
					<div className='text'>Frontend Development</div>
					<span>
						iam skilled at frontend development libraries mostly React and react
						native
					</span>
				</div>
			</div>
			<div className='serv-box'>
				<img src='src/images/back.png' alt='' className='serv-img' />
				<div className='xb' style={styles}>
					<div className='text'>Backend development</div>
					<span>
						iam skilled at backend development with Node.js and Express.js
					</span>
				</div>
			</div>
			<div className='serv-box'>
				<img src='src/images/data.png' alt='' className='serv-img' />
				<div className='xb' style={styles}>
					<div className='text'>Data Visualisation</div>
					<span>iam skilled at data visualisation with D3.js and Chart.js</span>
				</div>
			</div>
			<div className='serv-box'>
				<img src='src/images/native.png' alt='' className='serv-img' />
				<div className='xb' style={styles}>
					<div className='text'> Native mobile app development</div>
					<span>
						iam skilled at developing native mobile apps for both ios and
						android using react-native
					</span>
				</div>
			</div>
		</div>
	);
};
export default Services;
