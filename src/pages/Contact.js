import styled from "styled-components";
import { Content } from "../App.styled";

const Contact = () => {
	const ContactForm = styled.form`
		background-color: var(--color-3);

		width: 600px;
		height: 280px;
		
		margin-top: 50px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		padding-bottom: 30px;
		border-radius: 30px;
	`;
	const InputWrapper = styled.div`
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 5px;
		flex-wrap: wrap;
		h2 {
			font-size: 30px;
		}
		label {
			width: 35%;
		}
		input {
			width: 60%;
		}
		textarea {
			width: 60%;
			height: 150px;
			resize: none;
		}
		button {
			width: 40%;
		}
	`;

	return (
		<Content>
			<ContactForm>
				<h2>Contact us!</h2>
				<InputWrapper>
					<label>Email Address:</label>
					<input type="email" />
				</InputWrapper>
				<InputWrapper>
					<label>Message</label>
					<textarea type="text" />
				</InputWrapper>
				<InputWrapper>
					<input type="submit" value="submit" />
				</InputWrapper>
			</ContactForm>
		</Content>
	);
};

export default Contact;
