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
import Home from "./pages/Home";

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
						<Link to="/">Home</Link>
						<Link to="about">About Us</Link>
						<Link to="contact">Contact Us</Link>
					</ButtonWrapper>
				</HeadContainer>

				<Sidebar />
				<Routes>
					<Route path="/" element={<Home error={error} breed={breed} />} />
				</Routes>
				
			</BrowserRouter>
		</Container>
	);
};

export default App;
