import { combineReducers } from "redux";
import clientsReducer from "./clients/clientsReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducers } from "./auth/authReducers";
import { productsReducer } from "./products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  clients: clientsReducer,
  auth: authReducers,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
