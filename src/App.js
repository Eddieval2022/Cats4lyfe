import "./App.css";
import {
	ButtonWrapper,
	HeadContainer,
	Container,
	Temp,
	Content,
} from "./App.styled";

import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

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
			<BrowserRouter>
				<HeadContainer>
					<h1>Cats4Lyfe</h1>
					<ButtonWrapper>
						<button>Home</button>
						<button>About Us</button>
						<button>Contact Us</button>
					</ButtonWrapper>
				</HeadContainer>
				<Sidebar />

				<Content>
					{error && <p>{error}</p>}
					{breed.slice(0, 25).map((cat) => (
						<Temp className="info" key={cat.id}>
							<h3>Name : {cat.name}</h3>
							<img src={cat.image["url"]} alt="cat" />
							<br />
							<p>Price: £0.00</p>
							<button>Add to cart</button>
						</Temp>
					))}
				</Content>
			</BrowserRouter>
		</Container>
	);
};

export default App;
