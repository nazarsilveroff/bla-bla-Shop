import { createAction } from "@reduxjs/toolkit";

export const getAllProductsRequest = createAction(
  "products/getAllProductsRequest"
);
export const getAllProductsSuccess = createAction(
  "products/getAllProductsSuccess"
);
export const getAllProductsError = createAction("products/getAllProductsError");

export const addProductRequest = createAction("products/addProductRequest");
export const addProductSuccess = createAction("products/addProductSuccess");
export const addProductError = createAction("products/addProductError");

export const deleteProductRequest = createAction(
  "products/deleteProductRequest"
);
export const deleteProductSuccess = createAction(
  "products/deleteProductSuccess"
);
export const deleteProductError = createAction("products/deleteProductError");
