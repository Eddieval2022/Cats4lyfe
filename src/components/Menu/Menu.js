import { CatCartImage, Checkout, StyledMenu } from "./Menu.styled";

const Menu = ({ openMenu, cart, totalPrice}) => {
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
						<button
							onClick={() =>
								alert(
									"The cats are monitoring the customers carts, we couldn't bear to see their hearts break at being chosen and then rejected, so we decided to remove the option to remove them from your cart, we hope you understand."
								)
							}
						>
							Remove
						</button>
					</div>
				</div>
			))}
		</StyledMenu>
	);
};

export default Menu;
