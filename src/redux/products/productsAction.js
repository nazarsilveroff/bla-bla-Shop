import { createAction } from "@reduxjs/toolkit";

export const getAllProducts = createAction("products/getAllProducts");
export const addProduct = createAction("products/addProduct");
export const deleteProduct = createAction("products/deleteProduct");

// export const getAllProducts = (products) => {
//   return { type: "getAllProducts", payload:products };
// };

// export const addProduct = (car) => {
//   console.log(car);
//   return {
//     type: "addProduct",
//     payload: car,
//   };
// };

// export const deleteProduct = (id) => ({
//   type: "deleteProduct",
//   payload: id,
// });
