/** @format */
import "./Results.css";
const Results = (props) => {
	const { name, email, company } = props;
	console.log(props.k);
	const styles = {
		backgroundColor: "transparent",
	};
	if (props.k) {
		styles.backgroundColor = "navy";
	}
	return (
		<div className='results' style={styles}>
			<div className='nome'>{name}</div>
			<div className='email'>{email}</div>
			<div className='com'>{company.catchPhrase}</div>
		</div>
	);
};

export default Results;
