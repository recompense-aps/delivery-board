import axios from 'axios'

const client = axios.create({
    baseUrl: 'http://localhost:3000',
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
    addOrder(order){
        return client.post('/orders', order)
    }
}