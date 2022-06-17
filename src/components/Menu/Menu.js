import { CatCartImage, Checkout, StyledMenu } from "./Menu.styled";

const Menu = ({ openMenu, cart, totalPrice }) => {
	return (
		<StyledMenu openMenu={openMenu}>
			<Checkout>
				<h4>Total Cost: £{totalPrice}</h4>
				<br />
				<button
					onClick={() =>
						alert(
							`Your cats are currently being launched from our specially designed trebuchets and should be with you within the next 20 minutes assuming ideal weather conditions. \n\nYour bank has been charged £${totalPrice} and there are no refunds or returns under any circumstances`
						)
					}
				>
					Place order!
				</button>
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
