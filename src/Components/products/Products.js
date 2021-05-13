import axios from "axios";
import React, { Component } from "react";
import { addProduct, deleteProduct } from "../../redux/products/productsAction";
import ProductsForm from "./productsForm/ProductsForm";
import ProductsList from "./productsList/ProductsList";
import { connect } from "react-redux";

class Products extends Component {
  state = { autoCars: [] };

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

        this.setState({ autoCars: cars });
      } else return;
    } catch (error) {}
  }

  addCar = async (car) => {
    try {
      // const respons = await axios.post(
      //   `https://shop-a2177-default-rtdb.firebaseio.com/cars.json`,
      //   car
      // );

      this.props.addProduct({ ...car, id: "ggg" });
      // this.setState((prevState) => {
      //   return {
      //     autoCars: [...prevState.autoCars, { ...car, id: respons.data.name }],
      //   };
      // });
    } catch (error) {}
  };

  deleteCar = async (id) => {
    try {
      await axios.delete(
        `https://shop-a2177-default-rtdb.firebaseio.com/cars/${id}.json`
      );
      this.props.deleteProduct(id);
      // this.setState({
      //   autoCars: this.state.autoCars.filter((car) => car.id !== id),
      // });
    } catch (error) {}
  };

  render() {
    return (
      <>
        <h2>Продукты</h2>
        <ProductsForm addCar={this.addCar} />
        <ProductsList
          products={this.state.autoCars}
          deleteCar={this.deleteCar}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProduct: (car) => {
      dispatch(addProduct(car));
    },
  };
};

export default connect(null, mapDispatchToProps)(Products);
