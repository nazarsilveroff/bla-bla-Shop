import React from 'react'

const ClientList = ({ clients }) => {
    return (
        <ul className='clientList'>
            {clients.map(client => (
                <li key={client.id}>{client.name}</li>))}
        </ul>
    );
}

export default ClientList;