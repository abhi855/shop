import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  background-color: pink;
  ${mobile({ height: "50px" })}
  display:flex;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  ${mobile({ width: "50px" })}
  color:gray;
`;
const Logo = styled.h1`
  font-weight: bold;
  margin: 0px;
  padding: 0px;
  ${mobile({ fontSize: "20px" })}
`;
const SearchContainer = styled.div`
  border: 1px #943652;
  border-style: solid;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    margin: "0px 5px",
    fontWeight: "400w",
  })}/* paddingRight : ${(props) => (props.type === "cart" ? "5px" : "0")} */
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Left>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left> */}
        <Center>
          <Logo>RAVI BEEJ BHANDAR</Logo>
        </Center>
        {/* <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem type="cart">
            <Badge badgeContent={5} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right> */}
      </Wrapper>
    </Container>
  );
};
export default Navbar;
