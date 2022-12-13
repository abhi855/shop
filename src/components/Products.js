import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts, productsSecond } from "../data";
import { mobile } from "../responsive";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #eeeeee;
  ${mobile({ padding: "5px 0px", backgroundColor: "#fff0e6" })}
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      // try {
      //   const res = await axios.get(
      //     category
      //       ? `http://localhost:5000/api/products?category=${category}`
      //       : "http://localhost:5000/api/products"
      //   );
      //   setProducts(res.data);
      // } catch (e) {}
      setProducts(() =>
        productsSecond.filter((item) => item.category === category)
      );
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    console.log(products[0]);
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key] === value)
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "new") {
      console.log(sort);
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      );
    } else if (sort === "asc") {
      console.log("Ascending");
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  console.log(products);
  console.log(filteredProducts);
  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <ProductItem item={item} />)
        : products.map((item) => <ProductItem item={item} />)}
    </Container>
  );
};

export default Products;
