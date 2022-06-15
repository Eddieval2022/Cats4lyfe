import styled from "styled-components";

export const Container = styled.div`
	text-align: center;

	background-color: var(--color-1);

	height: auto;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;
export const Content = styled.div`
	width: calc(100vw - 100px);

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const Temp = styled.div`
	margin: 50px;
	width: 400px;
	height: 400px;
	border-radius: 15px;
	background-color: var(--color-3);
	img {
		width: 300px;
		height: 300px;
	}
`;
