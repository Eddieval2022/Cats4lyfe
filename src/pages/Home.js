import { Content, CatCard } from "../App.styled";
const Home = ({ error, breed }) => {
	return (
		<Content>
			{error && <p>{error}</p>}
			{breed.slice(0, 25).map((cat) => (
				<CatCard className="info" key={cat.id}>
					<h3>Name : {cat.name}</h3>
					<img src={cat.image["url"]} alt="cat" />
					<br />
					<p>Price: £0.00</p>
					<button>Add to cart</button>
				</CatCard>
			))}
		</Content>
	);
};

export default Home;
