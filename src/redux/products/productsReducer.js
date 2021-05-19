import { createReducer } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, getAllProducts } from "./productsAction";

const productsReducer = createReducer([], {
  [getAllProducts]: (_, { payload }) => payload,
  [addProduct]: (state, { payload }) => [...state, payload],
  [deleteProduct]: (state, { payload }) => [
    ...state.filter((product) => product.id !== payload),
  ],
});

export default productsReducer;

// const productsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "addProduct":
//       return [...state, action.payload];
//     case "deleteProduct":
//       return [...state.filter((product) => product.id !== action.payload)];
//     case "getProducts":
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export default productsReducer;
