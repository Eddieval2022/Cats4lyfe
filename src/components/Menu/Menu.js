import { CatCartImage, StyledMenu } from "./Menu.styled";

const Menu = ({ openMenu, cart }) => {
	return (
		<StyledMenu openMenu={openMenu}>
			{cart.map((cartItem) => (
				<div key={cartItem.index}>
					<CatCartImage src={cartItem.image} />
					<div className="CatCartData">
						<h3>{cartItem.name}</h3>
						<p>{cartItem.price}</p>
					</div>
				</div>
			))}
		</StyledMenu>
	);
};

export default Menu;
