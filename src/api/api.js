import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

export default {
    getAllOrders(){
        return client.get('/orders')
    },
    getAllUsers(){
        return client.get('/users')
    },
    getAllProducts(){
        return client.get('/products')
    },
    getAllClients(){
        return client.get('/clients')
    },
    addOrder(order){
        return client.post('/orders', order)
    }
}