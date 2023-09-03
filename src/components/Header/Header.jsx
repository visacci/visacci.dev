/** @format */

import "./Header.css";
import { useState } from "react";
import { FaSearchengin, FaBars } from "react-icons/fa6";

const Header = (props) => {
	const [state, setState] = useState(true);
	const [menu, setMenu] = useState(true);
	const [search, setSearch] = useState("");
	const sendMenu = () => {
		setMenu(!menu);
		props.now(menu);
	};
	const sendState = () => {
		props.nad(state);
		setState(!state);
	};
	const fetchData = (value) => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => {
				const newResult = json.filter((x) => {
					return value && x && x.name && x.name.toLowerCase().includes(value);
				});
				props.fetch(newResult);
			});
	};
	const handle = (value) => {
		setSearch(value);
		fetchData(value);
	};
	return (
		<div className='header'>
			<div className='menu' onClick={sendMenu}>
				<FaBars />
			</div>
			<div className='header-name'>
				<span className='head'>v</span>isacci
			</div>
			<div className='search'>
				<input
					type='text'
					placeholder='test search...'
					className='in'
					onChange={(e) => {
						handle(e.target.value);
					}}
					value={search}
				/>
				<FaSearchengin className='i' />
			</div>
			<div className='header-btn'>
				<button onClick={sendState} className='sub'>
					Email Me
				</button>
			</div>
		</div>
	);
};

export default Header;
