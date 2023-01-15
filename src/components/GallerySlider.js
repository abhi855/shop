import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { useRef } from "react";
import GallerySliderItem from "./GallerySliderItem";

import { mobile } from "../responsive";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
const Container = styled.div`
  box-sizing: border-box;
  margin: 10px 0px;
  padding: 0;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;

  overflow: hidden;
  padding: 10px 30px;
  ${mobile({
    padding: "1px",
  })};
`;
const Carousel = styled.div`
  padding: 0 60px;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  transition: all 0.5s ease-in-out;
  ${mobile({
    padding: "0px",
  })};
`;
const Arrow = styled.button`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellowgreen;
  position: absolute;
  cursor: pointer;
  z-index: 1;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  border: none;
  left: ${(props) => props.direction === "left" && "5px"};
  right: ${(props) => props.direction === "right" && "5px"};
  margin: auto;
  transition: transform 0.1s linear;

  ${mobile({
    display: "none",
  })};
`;
const Heading = styled.h1`
  text-align: center;
`;

export default function GallerySlider() {
  const data = [
    "https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_19-1024x576.jpg",
    "https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_19-1024x576.jpg",
    "https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_20-768x512.jpg",
    "https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_19-1024x576.jpg",
    "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    "https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_20-768x512.jpg",
    "https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_19-1024x576.jpg",
    "https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/08/pinhole_kids_01-768x512.jpg",
    "https://mksdmcdn-9b59.kxcdn.com/pinhole/wp-content/uploads/2017/07/pinhole_interior_20-768x512.jpg",
  ];

  const carousel = useRef(null);
  const helper = (direction) => {
    if (direction == "right") {
      carousel.current.scrollLeft += 450;
    } else {
      carousel.current.scrollLeft -= 450;
    }
  };
  return (
    <Container>
      <Heading>Gallery</Heading>
      <Wrapper>
        <Arrow direction="left" onClick={() => helper("left")}>
          <ArrowBackIosOutlined />
        </Arrow>
        <Carousel ref={carousel}>
          {data.map((item) => (
            <GallerySliderItem src={item} />
          ))}
        </Carousel>
        <Arrow direction="right" onClick={() => helper("right")}>
          <ArrowForwardIosOutlined />
        </Arrow>
      </Wrapper>
    </Container>
  );
}
