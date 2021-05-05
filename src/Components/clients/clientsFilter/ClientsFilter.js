import React from "react";

const ClientsFilter = ({ filter, setFilter }) => {
  return (
    <label>
      Filter:
      <input value={filter} onChange={setFilter} type="text" />
    </label>
  );
};

export default ClientsFilter;
