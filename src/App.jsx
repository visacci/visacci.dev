/** @format */
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import { useState } from "react";
import Message from "./components/Message/Message";
import Results from "./components/Results/Results";
import Services from "./components/Services/Services";
import Resume from "./components/Resume/Resume";
function App() {
	const [gift, setGift] = useState([]);
	const getHold = (user) => {
		setGift(user);
	};
	const [not, setNot] = useState(false);
	const move = (data) => {
		setNot(data);
	};
	const [on, setOn] = useState(false);
	const getOn = (state) => {
		setOn(state);
	};
	const [allan, setAllan] = useState(false);
	const deb = (pt) => {
		setAllan(pt);
	};
	const load = gift.map((x) => <Results {...x} key={x.id} k={allan} />);
	const styles = {
		backgroundColor: "acqua",
	};
	if (allan) {
		styles.backgroundColor = "black";
	} else {
		styles.backgroundColor = "grey";
	}
	return (
		<div className='app' style={styles}>
			<Header now={getOn} nad={move} fetch={getHold} />
			<div className='load'>{load}</div>
			<Message done={not} />
			<Sidebar trigger={on} ping={deb} />

			<Routes>
				<Route path='/services' element={<Services x={allan} />} />
				<Route path='/about' element={<About y={allan} />} />
				<Route path='/' element={<Card z={allan} />} />
				<Route path='/resume' element={<Resume h={allan} />} />
			</Routes>
			<Footer p={allan} />
		</div>
	);
}

export default App;
