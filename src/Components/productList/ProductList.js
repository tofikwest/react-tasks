import React from "react";
import ProductListItem from "./productListItem/ProductListItem";
import { ProductListStyled } from "./ProductListStyled";

const ProductList = ({ products, addToCart }) => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <ProductListItem
          product={product}
          key={product.id}
          addToCart={addToCart}
        />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;
