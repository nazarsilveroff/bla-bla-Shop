const clientsReducer = (state = [], action) => {
  switch (action.type) {
    case "addClients":
      return [...state, action.payload];
    case "deleteClients":
      return [...state.filter((client) => client.id !== action.payload)];

    default:
      return state;
  }
};

export default clientsReducer;
