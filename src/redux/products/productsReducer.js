import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { logOut } from "../auth/authActions";
import {
  getAllProductsSuccess,
  addProductSuccess,
  deleteProductSuccess,
  getAllProductsRequest,
  addProductRequest,
  deleteProductRequest,
  getAllProductsError,
  addProductError,
  deleteProductError,
} from "../../redux/products/productsAction";

export const itemsReducer = createReducer([], {
  [getAllProductsSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => [...state, payload],
  [deleteProductSuccess]: (state, { payload }) => [
    ...state.filter((product) => product.id !== payload),
  ],
  [logOut]: () => ({}),
});

export const loaderReducer = createReducer(false, {
  [getAllProductsRequest]: (state) => !state,
  [addProductRequest]: (state) => !state,
  [deleteProductRequest]: (state) => !state,

  [getAllProductsError]: (state) => !state,
  [addProductError]: (state) => !state,
  [deleteProductError]: (state) => !state,

  [getAllProductsSuccess]: (state) => !state,
  [addProductSuccess]: (state) => !state,
  [deleteProductSuccess]: (state) => !state,
  [logOut]: () => false,
});

export const erorReducer = createReducer("", {
  [getAllProductsError]: (_, { payload }) => payload,
  [addProductError]: (_, { payload }) => payload,
  [deleteProductError]: (_, { payload }) => payload,
  [logOut]: () => "",
});

export const productsReducer = combineReducers({
  items: itemsReducer,
  isloader: loaderReducer,
  error: erorReducer,
});
