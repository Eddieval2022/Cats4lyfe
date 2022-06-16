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
  height: 142px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  background-color: var(--color-2);

  h1 {
    width: 100%;
    font-size: 40px;
  }
`;

export const ButtonWrapper = styled.div`
	width: 30%;
	height: 20%;
	padding-bottom: 10px;
	a {
		-moz-appearance: button;
		appearance: button;
		font-size: 25px;
		width: 30%;
		margin-left: 2.5px;
		margin-right: 2.5px;
		height: 50px;
		border: #000 1px solid;
		padding: 5.5px;
		border-radius: 10px;

		text-align: center;
		text-decoration: none;
		color: inherit;
		background-color: var(--color-2);
		line-height: 300%;
	}
=======
  margin: 50px;
  width: 100%;
  height: 65px;
  background-color: var(--color-3);
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

`;

export const Footer = styled.footer`
  font-size: 25px;
  margin-top: 10px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--color-6);
`;
