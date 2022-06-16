import { CatCartImage, StyledMenu } from "./Menu.styled";

const Menu = ({ openMenu }) => {
	return (
		<StyledMenu openMenu={openMenu}>
			<div>
				<CatCartImage src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
				<div className="CatCartData">
					<h3>Abyssinian</h3>
					<p>£0.00</p>
				</div>
			</div>
			<div>
				<CatCartImage src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
				<div className="CatCartData">
					<h3>Abyssinian</h3>
					<p>£0.00</p>
				</div>
			</div>
			<div>
				<CatCartImage src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
				<div className="CatCartData">
					<h3>Abyssinian</h3>
					<p>£0.00</p>
				</div>
			</div>
			<div>
				<CatCartImage src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
				<div className="CatCartData">
					<h3>Abyssinian</h3>
					<p>£0.00</p>
				</div>
			</div>
			<div>
				<CatCartImage src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
				<div className="CatCartData">
					<h3>Abyssinian</h3>
					<p>£0.00</p>
				</div>
			</div>
			<div>
				<CatCartImage src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
				<div className="CatCartData">
					<h3>Abyssinian</h3>
					<p>£0.00</p>
				</div>
			</div>
			<div>
				<CatCartImage src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
				<div className="CatCartData">
					<h3>Abyssinian</h3>
					<p>£0.00</p>
				</div>
			</div>
		</StyledMenu>
	);
};

export default Menu;
