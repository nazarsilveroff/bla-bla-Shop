import React from 'react'
import data from '../../data';
import ClientList from '../clients/ClientList';
import ProductsList from '../products/ProductsList';


const Main = () => {
    return (
        <main>
            <ProductsList products={data.products} />
            <ClientList clients={data.clients} />
        </main>
    );
}

export default Main;