import { ButtonWrapper, HeadContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeadContainer>
      <h1>Cats4Lyfe</h1>
      <ButtonWrapper>
        <button>Home</button>
        <button>About Us</button>
        <button>Contact Us</button>
      </ButtonWrapper>
    </HeadContainer>
  );
};

export default Header;
