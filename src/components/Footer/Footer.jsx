/** @format */
import "./Footer.css";
import {
	FaPhone,
	FaCcAmazonPay,
	FaFacebook,
	FaTwitter,
	FaGitAlt,
} from "react-icons/fa6";
const Footer = (props) => {
	const styles = {
		backgroundColor: "",
	};
	if (props.p) {
		styles.backgroundColor = "#181717";
	}
	return (
		<div className='footer' style={styles}>
			<ul className='ft'>
				<li>
					<FaPhone /> +256750685671
				</li>
				<li>
					<FaCcAmazonPay />
				</li>
				<li>
					<FaFacebook /> visacci allanz
				</li>
				<li>
					<FaTwitter />
				</li>
				<li>
					<FaGitAlt /> visacciallanz14@gmail.com
				</li>
			</ul>
		</div>
	);
};

export default Footer;
