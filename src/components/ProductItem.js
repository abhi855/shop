import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { imageLink, productsSecond } from "../data";
import { mobile } from "../responsive";

const Info = styled.div`
  width: 95%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;
const Container = styled.div`
  width: 250px;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 8px 8px 30px grey;
  height: 300px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  z-index: 4;
  /* display: flex;
  flex-direction: column; */
  /* transition: all 0.5s ease; */ /* &:hover ${Info} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.05);
    z-index: 2;
  } */ /* cursor: pointer; */
  ${mobile({ width: "47vw", height: "250px" })};
`;
const ImageContainer = styled.div`
  height: 75%;
  justify-content: center;
  display: flex;
  /*padding: 2px;*/
  align-items: center;
`;
const Image = styled.img`
  /* padding: 2px 0px; */
  height: 100%;
  /* width: 244px; */
  margin: 3px;
  object-fit: cover;
  ${mobile({ width: "45.5vw" })}
`;

const RsTag = styled.h3`
  align-self: center;
  font-family: "Gudea", sans-serif;
  color: black;
`;
const Title = styled.h5`
  color: #23a1d1;
  align-self: center;
  font-family: Verdana, sans-serif;
`;
const Company = styled.h6`
  color: #23a1d1;
  padding: 2px;
  align-self: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  opacity: 0.8;
`;
const ProductItem = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={`http://43.205.207.87/${item.thumb}`}
          alt="Image Not avavilable"
        />
      </ImageContainer>
      <Info>
        <Title>{item.title}</Title>
        <Company>{item.brand ? "item.brand" : "No brand"}</Company>
        <RsTag>&#8377; {item.price}</RsTag>
      </Info>
    </Container>
  );
};

export default ProductItem;
