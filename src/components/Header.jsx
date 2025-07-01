import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: red;
  padding: 40px 50px;
`;

const Container = styled.div`
  width: 100%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
    background-color: yellow;
    width: 33%;
`;

const Menu = styled.div`
    background-color: blue;
    width: 33%;
    display: flex;
    justify-content: space-between;
`;

const Auth = styled.div`
    background-color: antiquewhite;
    width: 33%;
    text-align: right;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  /* color: ${({ $color }) => $color || "#808080"}; */
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
`;

const MenuBtn = styled.button`
    /* background-color: transparent; */
    border: none;
    background-color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    /* height: ; */
`

const Header = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Logo>
            <P $fontSize="18px" $fontWeight="700">NIPPON IMPERIAL TOURS</P>
          </Logo>

          <Menu>
            <MenuBtn>Service</MenuBtn>
            <MenuBtn>Cars</MenuBtn>
            <MenuBtn>Pricing</MenuBtn>
            <MenuBtn>About</MenuBtn>
          </Menu>

          <Auth>
            <MenuBtn>Login</MenuBtn>
          </Auth>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;
