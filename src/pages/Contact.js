import { Content } from "../App.styled";
import { ContactForm, InputWrapper } from "./css/Contact.styled";

const Contact = () => {
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
