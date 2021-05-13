import axios from "axios";
import React, { Component } from "react";

class Details extends Component {
  state = {
    product: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://shop-a2177-default-rtdb.firebaseio.com/cars/${this.props.match.params.productId}.json`
      );
      this.setState({
        product: { ...response.data, id: this.props.match.params.productId },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps) {
    if (
      // this.state.product?.id &&
      this.props.match.params.productId !== this.state.product?.id
    ) {
      try {
        const response = await axios.get(
          `https://shop-a2177-default-rtdb.firebaseio.com/cars/${this.props.match.params.productId}.json`
        );
        this.setState({
          product: { ...response.data, id: this.props.match.params.productId },
        });
      } catch (error) {
        console.log(error);
      }
    } else return;
  }

  render() {
    return <h2>Details</h2>;
  }
}

export default Details;
