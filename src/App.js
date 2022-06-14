import "./App.css";
import { Container, Temp, Content } from "./App.styled";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<Container>
			<Header />
			<Sidebar />

			<Content>
				<Temp></Temp>
				<Temp></Temp>
				<Temp></Temp>
				<Temp></Temp>
				<Temp></Temp>
				<Temp></Temp>
				<Temp></Temp>
				<Temp></Temp>
				<Temp></Temp>
				<Temp></Temp>
			</Content>
		</Container>
	);
};
export default App;
