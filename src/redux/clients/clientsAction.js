import { createAction } from "@reduxjs/toolkit";

export const addClient = createAction("clients/addClient");
export const deleteClient = createAction("clients/deleteClient");
export const getAllClients = createAction("clients/getAllClients");

export const setClientLoading = createAction("clients/setClientLoading");
export const setError = createAction("clients/setError");
export const resetError = createAction("clients/resetError");
