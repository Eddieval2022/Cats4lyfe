// import { Item } from "framer-motion/types/components/Reorder/Item";
import { Content, CatCard } from "../App.styled";

const Home = ({ error, breed, breeds }) => {
  return (
    <Content>
      {error && <p>{error}</p>}
      {breed.slice(0, 30).map((item, index) => (
        <CatCard className="info" key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.pics} alt="cat" />
          <br />
          <p>£{item.price}</p>
          <button>Add to cart</button>
        </CatCard>
      ))}
    </Content>
  );
};

export default Home;
