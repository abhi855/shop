import {
  EmailOutlined,
  Facebook,
  PhoneOutlined,
  LocationOnOutlined,
} from "@material-ui/icons"
import React from "react"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  background-color: #b3e6ff;
  margin-top: 10px;
  display: flex;
  padding: 5px;
  padding-bottom: 10px;
  ${mobile({
    padding: "0px",
    height: "none",
    flexDirection: "column",
    justifyContent: "",
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const Logo = styled.h1`
  margin-bottom: 10px;
  font-size: 35px;
  ${mobile({ fontSize: "25px" })}
`
const Desc = styled.p`
  text-justify: inter-word;
  text-align: justify;
  margin-bottom: 10px;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`
const SocialContainer = styled.div`
  display: flex;
`
const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 10px;
  ${mobile({ fontSize: "25px" })}
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Payment = styled.img`
  height: 60px;
`
const ContactItem = styled.div`
  font-size: 18px;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Handle.</Logo>
        <Desc>
          asset static/js/bundle.js 1.93 MiB [emitted] (name: main) 1 related
          asset asset main.5dc776a348bb242a1a09.hot-update.js 4.17 KiB [emitted]
          [immutable] [hmr] (name: main) 1 related asset assets by path *.json
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <EmailOutlined />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <LocationOnOutlined />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PhoneOutlined />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links!</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>ManFashion</ListItem>
          <ListItem>WomanFashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>MyAccount</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>Address1 Address2 Address 3</ContactItem>
        <ContactItem>+123456789</ContactItem>
        <Payment src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-512.png" />
        <Payment src="https://cdn0.iconfinder.com/data/icons/money-143/48/29-512.png" />
      </Right>
    </Container>
  )
}

export default Footer
