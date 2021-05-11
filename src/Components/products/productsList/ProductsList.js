import React from "react";
import PropTypes from 'prop-types'
import ProductsListItem from "./productsListItem/ProductsListItem";
import { ProductsListConteiner } from "./ProductsListStyle";


const ProductsList = ({ products, deleteCar }) => {
  return (
    <ProductsListConteiner className="productsList">
      {products.map((product) => (
        <ProductsListItem product={product} key={product.id} deleteCar={deleteCar} />
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