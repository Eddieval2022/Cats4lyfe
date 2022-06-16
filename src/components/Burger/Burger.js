import { StyledBurger } from "./Burger.styled";

const Burger = ({ openMenu, setOpenMenu }) => {
	return (
		<StyledBurger openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)} >
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

export default Burger;
