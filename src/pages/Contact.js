import styled from "styled-components";
import { Content } from "../App.styled";

const Contact = () => {
	const ContactForm = styled.form`
		background-color: var(--colour-5);
		width: 300px;
		height: 200px;
	`;

	return (
		<Content>
			<ContactForm>
				<label>
					Email Address:
					<input></input>
				</label>
			</ContactForm>
		</Content>
	);
};

export default Contact;
