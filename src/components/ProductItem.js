import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
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

const Image = styled.img`
  /* padding: 2px 0px; */
  height: 75%;
  width: 244px;
  margin: 3px;
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
      <Image src={item.img} alt="Image Not avavilable" />
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
