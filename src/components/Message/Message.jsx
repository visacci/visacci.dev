/** @format */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Message.css";
const Message = (props) => {
	let styles = { height: 0, opacity: 0, display: "none" };
	if (props.done) {
		styles.height = "60%";
		styles.opacity = 1;
		styles.display = "flex";
	}
	// const [form, setForm] = useState({
	// 	name: "",
	// 	email: "",
	// 	message: "",
	// });
	// console.log(form);
	// const handleForm = (e) => {
	// 	const { name, value, type, checked } = e.target;
	// 	setForm((prev) => {
	// 		return {
	// 			...prev,
	// 			[name]: type === "checkbox" ? checked : value,
	// 		};
	// 	});
	// };
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_f9lfr3j",
				"template_jxrz1zb",
				form.current,
				"CkmgcW6ybQEPIb3HY"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("your message was succesfully sent");
				},
				(error) => {
					console.log(error.text);
					alert("an error occured!");
				}
			);
		e.target.reset();
	};
	const form = useRef();
	return (
		<div className='message' style={styles}>
			<form ref={form} onSubmit={sendEmail}>
				<label>
					Name:
					<input
						// onChange={handleForm}
						placeholder='name'
						type='text'
						className='mail'
						required
						name='name'
						// value={form.name}
					/>
				</label>
				<label>
					Email:{" "}
					<input
						// onChange={handleForm}
						type='email'
						placeholder='eg visacci@gmail.com'
						className='mail'
						required
						name='email'
						// value={form.email}
					/>
				</label>
				<label>
					Message:
					<textarea
						// onChange={handleForm}
						placeholder='your message here'
						type='text'
						className='mail texts'
						required
						name='message'
						// value={form.message}
					/>
				</label>
				<button className='mail-btn'>Send</button>
			</form>
		</div>
	);
};

export default Message;
