/** @format */
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
	FaMedium,
	FaAustralSign,
	FaCartShopping,
	FaEarthAmericas,
	FaHouseChimneyUser,
	FaMoon,
	FaSun,
} from "react-icons/fa6";

import { useState } from "react";
const Sidebar = (props) => {
	let obj = {
		display: "flex",
	};
	if (props.trigger) {
		obj.display = "none";
	}
	const [active, setActive] = useState(false);
	const [state, setState] = useState(true);
	const toggle = () => {
		setActive(!active);
	};
	const send = () => {
		setState(!state);
		props.ping(state);
	};
	const icon = state ? (
		<FaMoon className='icon me' onClick={send} />
	) : (
		<FaSun className='icon me' onClick={send} />
	);
	const mode = !state ? "Light" : "Dark";
	return (
		<div className={active ? "active" : null} id='sidebar' style={obj}>
			<div className='logo' onClick={toggle}>
				<FaMedium className='icon' />
			</div>
			<div className='user'>
				<img className='imgx' src='src/images/avator.png' />
				<div className='name'>
					<span className='o'>visacci</span>
					<span className='p'>software</span>
				</div>
			</div>
			<hr />
			<ul className='men'>
				<li>
					<Link to={"/"}>
						<FaHouseChimneyUser className='icon me' />
					</Link>

					<div className='x'>Home</div>
					<div className='tool'>Home</div>
				</li>
				<li>
					<Link to={"/about"}>
						<FaAustralSign className='icon me' />
					</Link>

					<div className='x'>About</div>
					<div className='tool'>About</div>
				</li>
				<li>
					<Link to={"/services"}>
						<FaCartShopping className='icon me' />
					</Link>

					<div className='x'>Services</div>
					<div className='tool'>Services</div>
				</li>
				<li>
					<Link to={"/resume"}>
						<FaEarthAmericas className='icon me' />
					</Link>
					<div className='x'>Resume</div>
					<div className='tool'>Resume</div>
				</li>
				<li className='g'>
					{icon}
					<div className='x'>{mode} Mode</div>
					<div className='tool'>{mode}</div>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
