import Container from "./Container";
import { StyleHeader } from "./style";
import Top from "./header/Top";
import Navbar from "./header/Navbar";
import Carousel from "./header/Carousel";

const Header = () => {
  return (
    <StyleHeader>
      <Container>
        <Top />
        <Navbar />
        <Carousel />
      </Container>
    </StyleHeader>
  );
};

export default Header;
