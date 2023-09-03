/** @format */
import "./Card.css";
import {
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaSass,
	FaReact,
	FaChartLine,
	FaSquareGit,
	FaSteam,
	FaCodeCommit,
	FaDatabase,
	FaLeaf,
	FaFileExport,
	FaNodeJs,
} from "react-icons/fa6";
const Card = (props) => {
	const { z } = props;
	const styles = {
		backgroundColor: "transparent",
	};
	console.log(z);
	if (z) {
		styles.backgroundColor = "#181717";
	}
	return (
		<div className='box'>
			<div className='big'>
				<span className='k'>Hello</span>, Welcome to my Portifolio!
			</div>
			<div className='big2'>
				My name is <span className='m'>ALLAN</span>, I'm a Fullstack{" "}
				<span className='eng'>Software Engineer.</span>
			</div>
			<div className='web'>
				<div className='card' style={styles}>
					<img src='src/images/avator.png' className='avator' />
					<h1 className='title'>
						<span>Visacci</span> Allanz
					</h1>
					<small>A Creative Freelancer & Full Stack Developer</small>
				</div>
				<img src='src/images/web.png' className='web-img' />
			</div>

			<div className='skills'>
				<h1 className='h' style={styles}>
					My skills
				</h1>
				<h3>***Frontend***</h3>
				<ul className='ski' style={styles}>
					<li>
						<FaHtml5 className='a1' /> Html
					</li>
					<li>
						<FaCss3Alt className='a2' />
						Css
					</li>
					<li>
						<FaBootstrap className='a3' />
						BootStrap
					</li>
					<li>
						{" "}
						<FaSass className='a4' />
						Sass
					</li>
					<li>
						<span className='a5'>JS</span> JavaScript
					</li>
					<li>
						<FaReact className='a6' />
						React.js (for web-based application)
					</li>
					<li>
						<FaReact className='a7' />
						React-native (for native mobile apps "ios and android")
					</li>
					<li>
						<FaChartLine className='a8' />
						Data Visualisation with D3.js
					</li>
					<li>
						<FaSquareGit className='a9' />
						Git and Git Hub
					</li>
					<li>
						<FaSteam className='a10' />
						Agile project management mrthodologies like "scrum"
					</li>
				</ul>
				<h3>***Backend***</h3>
				<ul className='ski' style={styles}>
					<li>
						<FaCodeCommit className='a11' />
						Bash Scripting
					</li>
					<li>
						<FaDatabase className='a12' />
						Relational Database (SQL)
					</li>
					<li>
						<FaLeaf className='a13' />
						Mongo DB
					</li>
					<li>
						<FaFileExport className='a14' />
						Express js
					</li>
					<li>
						<FaNodeJs className='a15' />
						Node.js
					</li>
					<li>
						<FaDatabase className='a16' />
						APIs
					</li>
				</ul>
			</div>
			<small className='em'>
				Code for this website and all its functionality was written and
				programed by <em>katende ibrahim</em> aka <em>visacci allanz</em> using{" "}
				<FaReact />
				<em>React.js</em>
			</small>
		</div>
	);
};

export default Card;
