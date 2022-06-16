import "./App.css";
import { ButtonWrapper, HeadContainer, Container } from "./App.styled";
import { faker } from "@faker-js/faker";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
	const [breed, setBreed] = useState([]);
	const [error, setError] = useState(null);

	const fetchFaker = () => {
		const array = [];
		for (let i = 0; i < 28; i++) {
			const name = faker.name.findName();
			const price = faker.commerce.price(60, 200);
			array.push({ name, price });
		}
		return array;
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				let fakeData = fetchFaker();

				const response = await fetch(
					"https://api.thecatapi.com/v1/breeds?api_key=1c98326e-5928-446a-886a-db98d650f23f"
				);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const data = await response.json();
				
				fakeData = fakeData.map((cat, i) => {
					cat.pics = data[i]["image"].url;
					cat.breed = data[i].name;
					cat.description = data[i].description;
					cat.id = i;

					console.log(cat);
					return cat;
				});
				setBreed(fakeData);
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
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
};

export default App;
