import styled from "styled-components";

export const HeadContainer = styled.div`
	width: 100vw;
	height: 130px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	background-color: var(--color-1);

	h1 {
		width: 100%;
	}
`;

export const ButtonWrapper = styled.div`
	width: 30%;
	height: 54%;

	button {
		width: 30%;
		margin-bottom: 0;
		height: 49px;
	}
`;
