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

	transform: ${({ openMenu }) =>
		openMenu ? "translateX(0)" : "translateX(100%)"};
	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: #000;
		text-decoration: none;
		transition: color 0.3s linear;
	}

	&:hover {
		color: var(--color-1);
	}
`;
