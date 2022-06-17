import styled from "styled-components";

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: var(--color-3);
	flex-grow: 1;
	min-height: 100vh;

	text-align: left;
	padding: 2rem;

	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;
	border-left: #000 solid 2px;
	border-bottom: #000 solid 2px;

	transform: ${({ openMenu }) =>
		openMenu ? "translateX(0)" : "translateX(100%)"};
	div {
		display: flex;
		font-size: 1rem;
		text-transform: uppercase;
		padding: 1rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: #000;
		text-decoration: none;
		transition: color 0.3s linear;
	}
	div div {
		padding-left: 20px;
		display: flex;
		flex-direction: column;
	}

	&:hover {
		color: var(--color-1);
	}
`;

export const CatCartImage = styled.img`
	width: 150px;
	height: 150px;
	border: #000 1px solid;
`;

export const Checkout = styled.div`
	top: 0px;
	height: 100px;
	width: 100%;
`;
