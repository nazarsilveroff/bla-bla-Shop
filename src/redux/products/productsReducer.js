const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "addProduct":
      return [...state, action.payload];
    case "deleteProduct":
      return [...state.filter((product) => product.id !== action.payload)];
    case "getProducts":
      return action.payload;

    default:
      return state;
  }
};

export default productsReducer;
