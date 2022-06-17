// import { Item } from "framer-motion/types/components/Reorder/Item";
import { Content, CatCard } from "../App.styled";

// setCart(item.name, item.image, item.price)
const Home = ({ error, breed, cart, setCart, totalPrice, setTotalPrice }) => {
	return (
		<Content>
			{error && <p>{error}</p>}
			{breed.slice(0, 28).map((item, index) => (
				<CatCard className="info" key={item.id}>
					<h3>{item.name}</h3>
					<img src={item.pics} alt="cat" />
					<br />
					<p>£{item.price}</p>
					<button
						onClick={() => {
							setCart([
								...cart,
								{
									index: index,
									name: item.name,
									image: item.pics,
									price: item.price,
								},
							]);
							setTotalPrice(parseInt(totalPrice) + parseInt(item.price));
						}}
					>
						Add to cart
					</button>
				</CatCard>
			))}
		</Content>
	);

};

export default Home;
