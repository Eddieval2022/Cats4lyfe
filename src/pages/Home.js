// import { Item } from "framer-motion/types/components/Reorder/Item";
import { Content, Temp } from "../App.styled";
const Home = ({ error, breed, breeds }) => {
	return (
		<Content>
			{error && <p>{error}</p>}
			{breed.slice(0, 28).map((item, index) => (
				<Temp className="info" key={item.id}>
					<h3>{item.name}</h3>
					<img src={item.pics} alt="cat" />
					<br />
					<p>£{item.price}</p>
					<button>Add to cart</button>
				</Temp>
			))}
		</Content>
	);
};

export default Home;
