import { Settings } from "@mui/icons-material";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

const TopNav = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px;
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
  color: #fff;
`;

const Hero = styled.section`
  width: 100%;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
  z-index: 1;
`;

const HeroNav = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  z-index: 2;

  li {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
    color: white;

    &:hover {
      color: #f0c000;
    }
  }
`;

const HeroRelative = styled.div`
  width: 100%;
  height: 50px;
  background-color: #00000083;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Header = () => {
  const navItems = [
    "Top Cars",
    "Our Services",
    "Airport Transfers",
    "Day Trips",
    "Chauffeur Services",
  ];

  return (
    <Wrapper>
      <TopNav>
        <Logo>NIPPON IMPERIAL TOURS</Logo>
        <NavActions>
          <NavText>Search</NavText>
          <NavText>Login</NavText>
          <Icon>
            <Settings />
          </Icon>
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
      </Hero>
    </Wrapper>
  );
};

export default Header;
