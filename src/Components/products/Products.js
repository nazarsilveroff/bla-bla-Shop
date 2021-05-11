import axios from "axios";
import React, { Component } from "react";
import ProductsForm from "./productsForm/ProductsForm";
import ProductsList from "./productsList/ProductsList";

class Products extends Component {
  state = { autoCars: [] };


  async componentDidMount() {
    try {
      const response = await axios.get(`https://shop-a2177-default-rtdb.firebaseio.com/cars.json`)

      if (response.data) {
        const cars = Object.keys(response.data).map(key => ({ ...response.data[key], id: key }))

        this.setState({ autoCars: cars })
      } else return

    } catch (error) { }
  }


  addCar = async (car) => {
    try {
      const respons = await axios.post(`https://shop-a2177-default-rtdb.firebaseio.com/cars.json`, car)
      this.setState((prevState) => {
        return {
          autoCars: [...prevState.autoCars, { ...car, id: respons.data.name }],
        };
      });
    } catch (error) {

    }

  };


  deleteCar = async (id) => {
    try {
      const response = await axios.delete(`https://shop-a2177-default-rtdb.firebaseio.com/cars/${id}.json`)
      this.setState({ autoCars: this.state.autoCars.filter(car => car.id !== id) })
    } catch (error) { }
  }


  render() {
    return (
      <>
        <h2>Продукты</h2>
        <ProductsForm addCar={this.addCar} />
        <ProductsList products={this.state.autoCars} deleteCar={this.deleteCar} />
      </>
    );
  }
}

export default Products;
