import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import { Remove, Add } from "@material-ui/icons"

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  /* position: relative; */
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
`
const TopText = styled.div``
const TopLinks = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
const Info = styled.div`
  flex: 3;
  padding: 5px 10px;
`

const Product = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const ProductImg = styled.img`
  width: 200px;
`
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``

const ProductSize = styled.span``
const PriceDetail = styled.div`
  flex: 1;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ProductAmount = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: gray;
  margin: 5px;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  padding: 0;
`
const ProductColor = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* position: fixed; */
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopText>
            <TopLinks>Shopping Cart(2)</TopLinks>
            <TopLinks>WishList(0)</TopLinks>
          </TopText>
          <TopButton type="filled">Check Out Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <ProductImg src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Detail>
                  <ProductName>
                    <b>PRODUCT: </b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>PRODUCT ID: </b> 123456789
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>SIZE: </b> 30
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>2</Amount>
                  <Add />
                </AmountContainer>
                <ProductAmount>$24</ProductAmount>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <ProductImg src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Detail>
                  <ProductName>
                    <b>PRODUCT: </b> ELsewhere in the garden
                  </ProductName>
                  <ProductId>
                    <b>PRODUCT ID: </b> 1234554321
                  </ProductId>
                  <ProductColor color="yellow" />
                  <ProductSize>
                    <b>SIZE: </b> 56
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>2</Amount>
                  <Add />
                </AmountContainer>
                <ProductAmount>$24</ProductAmount>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <ProductImg src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Detail>
                  <ProductName>
                    <b>PRODUCT: </b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>PRODUCT ID: </b> 987654321
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>SIZE: </b> 34
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Remove />
                  <Amount>3</Amount>
                  <Add />
                </AmountContainer>
                <ProductAmount>$24</ProductAmount>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Cart
