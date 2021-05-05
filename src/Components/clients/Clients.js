import React, { Component, Fragment } from 'react'
import ClientsForm from './clientsForm/ClientsForm'
import ClientList from './clientsList/ClientList'
import { v4 as uuidv4 } from 'uuid';
import ClientsFilter from './clientsFilter/ClientsFilter';
import axios from 'axios';


class Clients extends Component {
    state = {
        clients: [],
        filter: '',
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get(
                `https://shop-a2177-default-rtdb.firebaseio.com/clients.json`)
            if (data) {
                const clients = Object.keys(data)
                    .map(key => ({ id: key, ...data[key] }))
                this.setState({ clients })
            }
            // console.log(data);
        } catch (error) {
        }
    }


    addClient = async (client) => {
        try {
            const { data } = await axios.post(`https://shop-a2177-default-rtdb.firebaseio.com/clients.json`, client)
            console.log(data);
            this.setState(prev => {
                return {
                    clients: [...prev.clients, { ...client, id: uuidv4() }]
                }
            })
        } catch (error) { }


    }


    deleteClient = async (e) => {
        try {
            const { id } = e.target;
            await axios.delete(`https://shop-a2177-default-rtdb.firebaseio.com/clients/${id}.json`);
            this.setState({
                clients: this.state.clients.filter((client) => client.id !== id)
            });
        } catch (error) { }

    };


    setFilter = (e) => {
        const { value } = e.target
        this.setState({
            filter: value
        })
    }

    getFilterClients = () => {
        return this.state.clients.filter(client => client.clientName.toLowerCase().includes(this.state.filter.toLowerCase()))
    }

    render() {
        return (
            <>
                <ClientsForm addClient={this.addClient} />
                <ClientsFilter filter={this.state.filter} setFilter={this.setFilter} />
                <ClientList clients={this.getFilterClients()} deleteClient={this.deleteClient} />
            </>
        );
    }
}
export default Clients;