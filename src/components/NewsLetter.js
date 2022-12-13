import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  padding: 5px;
  height: 60vh;
  background-color: #e6ffe6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "0px", height: "30vh" })}
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`
const Description = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "16px" })}
`
const InputContainer = styled.div`
  width: 40%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  ${mobile({ width: "80%", height: "30px" })}
`
const Button = styled.button`
  border: 2px solid black;
  flex: 1.5;
  background-color: teal;
  cursor: pointer;
`
const Input = styled.input`
  border: none;
  flex: 8;
  font-size: 20px;
  padding-left: 20px;
  ${mobile({ fontSize: "14px", paddingLeft: "10px", flex: "10" })}
`
const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get Timely Updates from our Products</Description>
      <InputContainer>
        <Input placeholder="Your e-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
