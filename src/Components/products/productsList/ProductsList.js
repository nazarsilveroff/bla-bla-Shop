import React from "react";
import PropTypes from 'prop-types'
import ProductsListItem from "./productsListItem/ProductsListItem";
import { ProductsListConteiner } from "./ProductsListStyle";

const ProductsList = ({ products }) => {
  return (
    <ProductsListConteiner className="productsList">
      {products.map((product) => (
        <ProductsListItem product={product} key={product.id} />
      ))}
    </ProductsListConteiner>
  );
};

export default ProductsList;



ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  )
}