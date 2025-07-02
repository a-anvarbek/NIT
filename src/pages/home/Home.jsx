import { FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";

import bgImage from "../../images/BG.jpg";
import Cars from "./Cars.jsx";

const Wrapper = styled.div`
  color: #fff;
  font-weight: 500;
`;

const Hero = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-color: #666464;
`;

const Content = styled.div`
  position: absolute;
  bottom: 180px;
  left: 50px;
  z-index: 2;
  max-width: 600px;
  color: #fff;

  h1 {
    font-size: 48px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 25px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.button`
  width: 300px;
  height: 55px;
  font-size: 20px;
  background-color: black;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  &:hover {
    background-color: white;
    color: black;
    border-color: white;
  }
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Hero>
          <Content>
            <h1>
              Experience Japan <br />
              in Comfort, Style, <br />
              and Class
            </h1>
            <Button>About more <FaArrowRightLong /> </Button>
          </Content>
        </Hero>
      </Wrapper>

      <Cars />
    </>
  );
};

export default Home;
