import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  loginOperations,
  registerOperations,
} from "../../redux/auth/authOperations";

class AuthForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          {this.props.location.pathname === "/registration"
            ? "Registeration"
            : "Login"}
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            this.props.location.pathname === "/registration"
              ? this.props.registerOperations(values)
              : this.props.loginOperations(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(null, { registerOperations, loginOperations })(
  withRouter(AuthForm)
);
// class AuthForm extends Component {
//   state = {
//     email: "",
//     password: "",
//   };
//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };
//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.location.pathname === "/registration"
//       ? this.props.registerOperations(this.state)
//       : this.props.loginOperations(this.state);
//   };
//   render() {
//     console.log(this.props.location.pathname);
//     return (
//       <form onSubmit={this.onHandleSubmit}>
//         <label>
//           Email
//           <input
//             name="email"
//             value={this.state.email}
//             type="text"
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             name="password"
//             value={this.state.password}
//             type="text"
//             onChange={this.onHandleChange}
//           />
//         </label>
//         <button type="submit">
//           {this.props.location.pathname === "/registration"
//             ? "register"
//             : "login"}
//         </button>
//       </form>
//     );
//   }
// }

// export default connect(null, { registerOperations, loginOperations })(
//   withRouter(AuthForm)
// );
