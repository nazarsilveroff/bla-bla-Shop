import axios from "axios";
import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Details from "../Components/details/Details";

class ProductsPage extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://shop-a2177-default-rtdb.firebaseio.com/cars.json`
      );

      if (response.data) {
        const products = Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }));

        this.setState({ products });
      } else return;
    } catch (error) {}
  }

  render() {
    return (
      <>
        <h2>Products</h2>
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              <NavLink to={`${this.props.match.url}/${product.id}`}>
                {product.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Route
          path={`${this.props.match.path}/:productId`}
          component={Details}
        />
      </>
    );
  }
}

export default ProductsPage;
