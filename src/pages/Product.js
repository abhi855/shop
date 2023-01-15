import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`
const ImgContainer = styled.div`
  flex: 1;
  
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`
const Title = styled.h1`
  font-weight: 600;
`
const Desc = styled.p`
  text-justify: inter-word;
  text-align: justify;
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: gray;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`
const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`
const FilterColor = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
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
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: aliceblue;
  }
`
const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://freepngimg.com/thumb/jeans/6-jeans-png-image.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Jeans</Title>
          <Desc>
            Entrypoint main 1.97 MiB (1.94 MiB) = static/js/bundle.js 1.97 MiB
            main.36618cf1b3 24c5842fb3.hot-update.js 6.09 KiB 2 auxiliary assets
            Entrypoint main 1.97 MiB (1.94 MiB) = static/js/bundle.js 1.97 MiB
            main.36618cf1b324c5842fb3.hot-update.js 6.09 KiB 2 auxiliary
            assetsEntrypoint main 1.97 MiB (1.94 MiB) = static/js/bundle.js 1.97
            MiB main.36618cf1b324c5842fb3.hot-update.js 6.09 KiB 2 auxiliary
            assets
          </Desc>
          <Price>$24</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="ff3333" />
              <FilterColor color="ff4d94" />
              <FilterColor color="2db300" />
              <FilterColor color="0086b3" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Product
