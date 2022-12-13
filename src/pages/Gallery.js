import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import GalleryWrapper from "../components/GalleryWrapper";

const Container = styled.div``;
const Title = styled.h2`
  margin: 20px;
  font-family: "Gudea", sans-serif;
`;

const Gallery = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Welcome to Our Gallery!!</Title>
      <GalleryWrapper category={"gallery"} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Gallery;
