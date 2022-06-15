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
	margin: 15px auto 15px -15px;
	
	width: 530px;
	height: auto;
	padding-bottom: 15px;
	border-radius: 15px;
	background-color: var(--color-3);

	img {
		height: 300px;
		width: 300px;
	}
`;
