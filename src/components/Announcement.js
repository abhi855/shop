import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  background-color: green;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ height: "20px", fontsize: "10px" })}
`;
const Announcement = () => {
  return <Container>Announcement</Container>;
};

export default Announcement;
