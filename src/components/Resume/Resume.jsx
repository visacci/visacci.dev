/** @format */
import { FaFreeCodeCamp } from "react-icons/fa6";
import React from "react";
import "./Resume.css";
const Resume = (props) => {
	const styles = {
		backgroundColor: "",
		color: "",
	};
	if (props.h) {
		styles.backgroundColor = "#181717";
		styles.color = "white";
	}
	return (
		<div className='resume'>
			<div className='headx'>Resume</div>
			<h1>Katende ibarahim</h1>
			<img src='src/images/avator.png' alt='' />
			<h2 style={styles}>studied at freecodeCamp.org</h2>
			<h1>certificationtions</h1>
			<ul className='z'>
				<a href='https://www.freecodecamp.org/certification/Katende-ibrahim/responsive-web-design'>
					<li style={styles}>
						<FaFreeCodeCamp className='med' /> Resposive WebDesign Certification
					</li>
				</a>
				<a href='https://www.freecodecamp.org/certification/Katende-ibrahim/javascript-algorithms-and-data-structures'>
					<li style={styles}>
						<FaFreeCodeCamp className='med' />
						JavaScript Algorithms and data structures Certification
					</li>
				</a>
				<a href='https://www.freecodecamp.org/certification/Katende-ibrahim/front-end-development-libraries'>
					<li style={styles}>
						<FaFreeCodeCamp className='med' /> FrontEnd Libraries Certification
					</li>
				</a>
				<a href='https://www.freecodecamp.org/certification/Katende-ibrahim/data-visualization'>
					<li style={styles}>
						<FaFreeCodeCamp className='med' /> Data Visualisation certification
					</li>
				</a>
			</ul>
		</div>
	);
};

export default Resume;
