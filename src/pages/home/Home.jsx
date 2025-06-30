import styled from "styled-components";
import { Settings } from "@mui/icons-material";
import bgImage from "../../assets/mersbenz.jpg";
import Cars from "../cars/Cars";


const Wrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #fff;
    font-weight: 500;

`;

const TopNav = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
    font-weight: 500;

`;

const Logo = styled.h1`
  font-size: 40px;
  font-weight: 500;

`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
    font-weight: 500;

`;

const NavText = styled.span`
  font-size: 18px;
  cursor: pointer;
   &:hover {
      color: #f0c000;
    }
`;

const Icon = styled.div`
  cursor: pointer;
  color: #000;
`;

const Hero = styled.section`
  position: relative;
  height: 91vh;
  width: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.2));
  z-index: 1;
`;

const HeroNav = styled.ul`
  top: 30px;
  left: 50%;
  display: flex;
  gap: 30px;
  z-index: 2;
  list-style: none;

  li {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #f0c000;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 180px; /* yuqoriroq ko‘tarildi */
  left: 60px;
  z-index: 2;
  max-width: 600px;
  color: #fff;

  h1 {
    font-size: 48px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 25px;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
  }
`;
const Button = styled.button`
  padding: 14px 30px;
  font-size: 17px;
  background-color: black;
  color: white;
  border: 2px solid white;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: white;
    color: black;
    border-color: white;
  }
`;


const HeroRelative = styled.div`
width: 100%;
height: 50px;
background-color: #00000083;
display: flex;
align-items: center;
justify-content: center;
`;

const Home = () => {
  const navItems = [
    "Top Cars",
    "Our Services",
    "Airport Transfers",
    "Day Trips",
    "Chauffeur Services",
  ];

  return (
    <>
    <Wrapper>
      <TopNav>
        <Logo>NIPPON IMPERIAL TOURS</Logo>
        <NavActions>
          <NavText>Search</NavText>
          <NavText>Login</NavText>
          <Icon><Settings /></Icon>
        </NavActions>
      </TopNav>

      <Hero>
        <Overlay />
        <HeroRelative>
        <HeroNav>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </HeroNav>
        </HeroRelative>

        <Content>
          <h1>
            Experience Japan <br />
            in Comfort, Style, <br />
            and Class
          </h1>
          <Button>About more →</Button>
        </Content>
      </Hero>
    </Wrapper>


    <Cars />





    </>
  );
};

export default Home;
