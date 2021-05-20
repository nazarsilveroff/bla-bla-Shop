import React, { Component } from "react";
import ProductsForm from "./productsForm/ProductsForm";
import ProductsList from "./productsList/ProductsList";
import { connect } from "react-redux";
import {
  deleteProductsOperations,
  getAllProductsOperations,
  getProductsOperations,
} from "../../redux/products/productOperations";
import { getAllProductsSelector } from "../../redux/products/productSelectors";
class Products extends Component {
  async componentDidMount() {
    this.props.getAllProductsOperations();
  }

  addCar = async (car) => {
    this.props.getProductsOperations(car);
  };

  deleteCar = async (id) => {
    this.props.deleteProductsOperations(id);
  };

  render() {
    return (
      <>
        <h2>Продукты</h2>
        <ProductsForm addCar={this.addCar} />
        <ProductsList
          products={this.props.products}
          deleteCar={this.deleteCar}
        />
      </>
    );
  }
}

const mapState = (state) => ({
  products: getAllProductsSelector(state),
});

const mapDispatch = {
  getAllProductsOperations,
  getProductsOperations,
  deleteProductsOperations,
};
export default connect(mapState, mapDispatch)(Products);
