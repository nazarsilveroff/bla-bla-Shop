import React, { Component } from "react";

class ProductsForm extends Component {
  state = {
    id: "",
    name: "",
    model: "",
    colors: [],
    price: "",
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCar(this.state);
    this.setState({
      id: "",
      name: "",
      model: "",
      colors: [],
      price: "",
    });
  };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            onChange={this.onHandleChange}
            value={this.state.name}
          />
        </label>
        <label>
          Price:
          <input
            name="price"
            type="text"
            onChange={this.onHandleChange}
            value={this.state.price}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ProductsForm;
