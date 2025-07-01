import styled from "styled-components";

const Wrapper = styled.div`
  background: #000;
  color: white;
  padding: 60px 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const Card = styled.div`
  background: black;
  border: 1px solid white;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 0 2px 2px #7a7878;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 20px;
`;

const CarName = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Price = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  color: #aaa;
`;

const BuyButton = styled.button`
  padding: 10px 18px;
  background: white;
  color: black;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #ddd;
  }
`;

const cars = [
  {
    name: "Mercedes-Benz S-Class",
    price: "$79/day",
    image: "/images/s-class.jpg",
  },
  {
    name: "Mercedes-Benz V-Class",
    price: "$99/day",
    image: "/images/v-class.jpg",
  },
  {
    name: "Toyota Alphard/Vellfire",
    price: "$59/day",
    image: "/images/alphard.jpg",
  },
  {
    name: "Toyota Hiace",
    price: "$99/day",
    image: "/images/hiace.jpg",
  },
  {
    name: "AMG® GT Black in Cherry",
    price: "$39/day",
    image: "/images/amg-gt.jpg",
  },
  {
    name: "Mercedes-Benz AMG GT63S 2019",
    price: "$109/day",
    image: "/images/gt63.jpg",
  },
];

const Cars = () => {
  return (
    <Wrapper>
      <Title>Top Cars</Title>
      <Grid>
        {cars.map((car, index) => (
          <Card key={index}>
            <Image src={car.image} alt={car.name} />
            <CarName>{car.name}</CarName>
            <Price>
              Starting at <strong>{car.price}</strong>
            </Price>
            <BuyButton>Buy Now →</BuyButton>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Cars;
