import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 48vw;
  background-color: #ff8080;
  height: 300px;
  margin: 5px 2px;
  padding: 1px;
  ${mobile({ width: "47vw", margin: "2px", height: "125px" })}
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const GalleryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
    </Container>
  );
};

export default GalleryItem;
