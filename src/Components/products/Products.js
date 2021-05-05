import React, { Component } from "react";
import ProductsForm from "./productsForm/ProductsForm";
import ProductsList from "./productsList/ProductsList";

class Products extends Component {
  state = { autoCars: [] };

  addCar = (car) => {
    this.setState((prevState) => {
      return {
        autoCars: [...prevState.autoCars, car],
      };
    });
  };

  render() {
    return (
      <>
        <h2>fgdfgdfgf</h2>
        <ProductsForm addCar={this.addCar} />
        <ProductsList products={this.state.autoCars} />
      </>
    );
  }
}

export default Products;
