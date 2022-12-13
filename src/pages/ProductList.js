import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { subcategories } from "../data";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  font-family: "Gudea", sans-serif;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  console.log(location);
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };
  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{location.state.category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="subcategory" onChange={handleFilters}>
            <Option disabled>Color</Option>
            {subcategories[cat].map((item) => (
              <Option value={item}>{item}</Option>
            ))}
            {/* <Option>smartphones</Option>
            <Option>laptop</Option>
            <Option>motorcycle</Option>
            <Option>lighting</Option> */}
          </Select>
          {/* <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select> */}
        </Filter>
        {/* <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option value="new">Newest</Option>
            <Option value="asc">Price(asc)</Option>
            <Option value="desc">Price(desc)</Option>
          </Select>
        </Filter> */}
      </FilterContainer>
      <Products category={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
