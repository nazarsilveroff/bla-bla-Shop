import React, { Component } from "react";

class ClientsForm extends Component {
  state = {
    clientName: "",
    creditCard: "",
  };

  onHendlerSubmit = (e) => {
    e.preventDefault();
    this.props.addClient(this.state);
    this.setState({
      clientName: "",
      creditCard: "",
    });
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.onHendlerSubmit}>
        <label>
          Client:
          <input
            type="text"
            name="clientName"
            value={this.state.clientName}
            onChange={this.onHandleChange}
          />
          Card:
          <input
            type="text"
            name="creditCard"
            value={this.state.creditCard}
            onChange={this.onHandleChange}
          />
          <button type="submit">save</button>
        </label>
      </form>
    );
  }
}

export default ClientsForm;
