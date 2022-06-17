import { CatCartImage, Checkout, StyledMenu } from "./Menu.styled";

const Menu = ({ openMenu, cart, totalPrice, deleteCat }) => {
	return (
		<StyledMenu openMenu={openMenu}>
			<Checkout>
				<h4>Total Cost: £{totalPrice}</h4>
			</Checkout>
			{cart.map((cartItem) => (
				<div key={cartItem.index}>
					<CatCartImage src={cartItem.image} />
					<div className="CatCartData">
						<h3>{cartItem.name}</h3>
						<p>{cartItem.price}</p>
						<button onClick={() => deleteCat(index)}>Remove</button>
					</div>
				</div>
			))}
		</StyledMenu>
	);
};

export default Menu;
