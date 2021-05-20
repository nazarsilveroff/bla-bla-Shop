// import { createSelector } from "@reduxjs/toolkit";

const getClientsSelector = (state) => state.clients.items;

const errorClientsSelektor = (state) => state.clients.error;

const loaderClientsSelector = (state) => state.clients.isLoading;

export { getClientsSelector, errorClientsSelektor, loaderClientsSelector };

// export const getPostsWithTags = createSelector(
//   [getClientsSelector, filterSelector],
//   (clients, filter) =>
//     clients.filter((client) => client.clientName.includes(filter))
// );
