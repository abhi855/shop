import React from "react";
import styled from "styled-components";
import { imageLink } from "../data";
import { mobile } from "../responsive";
import GalleryItem from "./GalleryItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${mobile({ padding: "5px 0px" })}
`;

const GalleryWrapper = ({ category }) => {
  return (
    <Container>
      {category
        ? imageLink.map((item) => GalleryItem((item = { item })))
        : imageLink.slice(0, 8).map((item) => GalleryItem((item = { item })))}
    </Container>
  );
};

export default GalleryWrapper;
