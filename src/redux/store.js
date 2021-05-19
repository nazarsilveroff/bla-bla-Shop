import { combineReducers } from "redux";
import clientsReducer from "./clients/clientsReducer";
import productsReducer from "./products/productsReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  products: productsReducer,
  clients: clientsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
