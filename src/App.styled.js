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
	min-height: 100vh;

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
    border-radius: 15px;
		height: 300px;
		width: 400px;
    object-fit:cover;
	}
`;
export const HeadContainer = styled.div`
	width: 100vw;
	height: 132px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	background-color: var(--color-2);

	h1 {
		width: 100%;
	}
`;

export const ButtonWrapper = styled.div`
	width: 30%;
	height: 54%;
	padding-bottom: 3px;
	a {
		-moz-appearance: button;
		appearance: button;
		width: 30%;
		margin-left: 2.5px;
		margin-right: 2.5px;
		height: 49px;
		border: #000 1px solid;

		text-align: center;
		line-height: 300%;
	}
=======
  margin: 50px;
  width: 400px;
  height: 400px;
  border-radius: 15px;
  background-color: var(--color-3);
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

`;
