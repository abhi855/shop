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
  background-color: #f4ead5;
  height: 300px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  /* display: flex;
  flex-direction: column; */

  /* transition: all 0.5s ease; */
  /* &:hover ${Info} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.05);
    z-index: 2;
  } */
  /* cursor: pointer; */
  ${mobile({ width: "47vw", height: "250px" })}
`;
const ImageContainer = styled.div`
  height: 75%;
  justify-content: center;
  display: flex;
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
  align-self: start;
  font-family: "Gudea", sans-serif;
  color: #439a97;
`;
const Title = styled.h5`
  align-self: start;
  font-family: Verdana, sans-serif;
`;
const Company = styled.h6`
  align-self: start;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  opacity: 0.8;
`;
const ProductItem = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={`http://43.205.207.87/${item.thumb}`}
          // src={`https://firebasestorage.googleapis.com/v0/b/shop-6dc83.appspot.com/o/${
          //   Math.round(Math.random() * 100) % 52
          // }.jpg?alt=media`}
          // src={
          //   "http://localhost:3000/shop/" +
          //   productsSecond[Math.round(Math.random() * 100) % 52].images[0]
          // }
          alt="Image Not avavilable"
        />
      </ImageContainer>
      <Info>
        <RsTag>from Rs = {item.price}</RsTag>
        <Title>{item.title}</Title>
        <Company>{item.brand ? "item.brand" : "No brand"}</Company>
      </Info>
      {/* <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info> */}
    </Container>
  );
};

export default ProductItem;
