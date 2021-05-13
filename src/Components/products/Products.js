import axios from "axios";
import React, { Component } from "react";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
} from "../../redux/products/productsAction";
import ProductsForm from "./productsForm/ProductsForm";
import ProductsList from "./productsList/ProductsList";
import { connect } from "react-redux";

class Products extends Component {
  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://shop-a2177-default-rtdb.firebaseio.com/cars.json`
      );

      if (response.data) {
        const cars = Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }));
        this.props.getAllProducts(cars);
        // this.setState({ autoCars: cars });
      } else return;
    } catch (error) {}
  }

  addCar = async (car) => {
    const respons = await axios.post(
      `https://shop-a2177-default-rtdb.firebaseio.com/cars.json`,
      car
    );
    this.props.addProduct({ ...car, id: respons.data.name });
  };

  deleteCar = async (id) => {
    await axios.delete(
      `https://shop-a2177-default-rtdb.firebaseio.com/cars/${id}.json`
    );
    this.props.deleteProduct(id);
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

const mstp = (state) => ({
  products: state.products,
});

export default connect(mstp, { addProduct, deleteProduct, getAllProducts })(
  Products
);
