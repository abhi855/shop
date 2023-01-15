import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Button = styled.button`
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: white;
  color: gray;
  font-size: 20px;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Link
        to={{
          pathname: `products/${item.cat}`,
          state: { category: item.title },
        }}
      >
        <Image src={process.env.PUBLIC_URL + item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoriesItem;
