import { Content } from "../App.styled";
import { AboutWrapper } from "./css/About.styled"
import catsImg from "./image/cats.jpg";


const About = () => {
	return (
        <Content>

            <AboutWrapper>
                <h2>About us!</h2>
                <img src={catsImg} alt="cats"/>
                <p>Cats4lyfe is a specialist UK based cat breeders providing pedigree cats and kittens.<br></br> We have over thirty years of experience and branches in London, Birmingham and Manchester.<br></br> We are true cat lovers and our expertise allows us to provide our customers with top quality cats and kittens at affordable prices.  </p>
            </AboutWrapper>
		</Content>
	);
};

export default About;
