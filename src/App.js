import "./App.css";
import { Container, Temp, Content } from "./App.styled";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

const App = () => {
	const [breed, setBreed] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://api.thecatapi.com/v1/breeds?api_key=1c98326e-5928-446a-886a-db98d650f23f"
				);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				console.log(data);
				setBreed(data);
			} catch (error) {
				console.log(error);
				setError("could not find data");
			}
		};
		fetchData();
	}, []);

	return (
		<Container>
			<Header />
			<Sidebar />

			<Content>
				{error && <p>{error}</p>}
				{breed.slice(0, 25).map((cat) => (
					<Temp className="info" key={cat.id}>
						<h3>Name : {cat.name}</h3>
						<img src={cat.image["url"]} alt="cat" />
					</Temp>
				))}
			</Content>
		</Container>
	);
};

export default App;
