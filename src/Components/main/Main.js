import React from "react";
import Clients from "../clients/Clients";
// import Products from "../products/Products";
// import data from '../../data';
// import ClientList from '../clients/ClientList';
// import ProductsList from '../products/ProductsList';

const Main = () => {
  return (
    <main>
      {/* <Products /> */}
      {/* <ProductsList products={data.products} />
            <ClientList clients={data.clients} /> */}
      <h2>Clients</h2>
      <Clients />
    </main>
  );
};

export default Main;
