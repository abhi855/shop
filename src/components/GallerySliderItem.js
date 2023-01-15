import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 300px;
  width: 33vw;
  border-radius: 25px;
  margin: 20px 15px;
  box-shadow: 12px 12px 2px 1px #e3acf9;
  ${mobile({
    width: "85vw",
    boxShadow: "none",
    height: "150px",
    margin: "10px 7.5vw",
  })};
`;
const Image = styled.img`
  height: 100%;
  width: 33vw;
  border-radius: 25px;
  object-fit: cover;
  ${mobile({
    width: "85vw",
    boxShadow: "none",
    height: "100%",
  })};
`;
export default function GallerySliderItem({ src }) {
  return (
    <Container>
      <Image src={src} draggable="false" />
    </Container>
  );
}
