import React from "react";
import {
  ColorsListItemContainer,
  ProductsListItemConteiner,
} from "./ProductsListItemStyle";
import PropTypes from 'prop-types'

const ProductsListItem = ({ product }) => {
  return (
    <ProductsListItemConteiner>
      <div className="card">
        <h2>Name: {product.name}</h2>
        <p>Model: {product.model}</p>
        <div>
          Colors:
          <ul className="colorList">
            {product.colors.map((color) => (
              <ColorsListItemContainer
                key={color}
                color={color}
              ></ColorsListItemContainer>
            ))}
          </ul>
        </div>
        <p>Price: {product.price}</p>
      </div>
    </ProductsListItemConteiner>
  );
};

export default ProductsListItem;

ProductsListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired,
    price: PropTypes.number
  }).isRequired
}