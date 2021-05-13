const clientsReducer = (state = [], action) => {
  switch (action.type) {
    case "addClients":
      return [...state.clients, action.payload];
    case "deleteClients":
      return [
        ...state.clients.filter((client) => client.id !== action.payload),
      ];

    default:
      return state;
  }
};

export default clientsReducer;
