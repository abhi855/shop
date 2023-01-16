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
  z-index: 3;
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  align-items: center;
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
  ${mobile({ width: "46vw", height: "250px",boxShadow:"1px 1px 30px grey"})};
`;
const ImageContainer = styled.div`
  height: 75%;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;

  ${mobile({ width: "100%", })}
`;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  ${mobile({ width: "90%", })}
`;

const RsTag = styled.h3`
  font-family: "Gudea", sans-serif;
  color: black;
`;
const Title = styled.h5`
  color: #23a1d1;
  font-family: Verdana, sans-serif;
`;
const Company = styled.h6`
  color: #23a1d1;
  padding:2px 0px;
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
