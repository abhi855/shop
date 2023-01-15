import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { SliderItems } from "../data"
import { useState } from "react"
import { mobile } from "../responsive"
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${(props) => props.bg};
`
const ImgContainer = styled.div`
  flex: 1;
  height: 80%;
`
const InfoConatiner = styled.div`
  flex: 1;
  /* padding: 50px;
  margin: 50px; */
`
const Image = styled.img`
  height: 80%;
  max-width: 100%;
`
const Title = styled.h1`
  font-size: 70px;
  margin: 0px;
`
const Desc = styled.p`
  margin: 50px 0px;
  text-align: justify;
  text-justify: inter-word;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
    console.log(slideIndex)
  }
  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left")
        }}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderItems.map((items) => (
          <Slide bg={items.bg}>
            <ImgContainer>
              <Image src={items.img} alt="Not Displayed" />
            </ImgContainer>
            <InfoConatiner>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button>Know More</Button>
            </InfoConatiner>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right")
        }}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
