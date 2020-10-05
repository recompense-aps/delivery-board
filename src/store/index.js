import Vue from "vue";
import Vuex from "vuex";
import api from "@/api/api.js"

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentUser: 	{},
		currentOrder: 	{},
		orders: 		[],
		products: 		[],
		clients: 		[],
		users: 			[],
	},
	mutations: {
		ADD_ORDER(state, order) {
			state.orders.push(order)
		},
		UPDATE_ORDER(state, order) {
			state.orders.filter(({id}) => order.id=id).forEach((oldOrder,index) => state.orders[index]=order)
		},
		DELETE_ORDER(state, order){
			state.orders = state.orders.filter(({id}) => id!=order.id)
		},
		SET_CURRENT_USER(state, user){
			state.currentUser = user
		},
		SET_CURRENT_ORDER(state, order){
			state.currentOrder = order
		},
		SET_PRODUCTS(state,products){
			state.products = products
		},
		SET_USERS(state,users){
			state.users = users
			// for testing
			state.currentUser = users[1]
		},
		SET_CLIENTS(state,clients){
			state.clients = clients
		},
		SET_ORDERS(state, orders){
			state.orders = orders
		}

	},
	actions: {
		addOrder({ commit }, order) {
			return api.addOrder(order).then(() => {
				commit('ADD_ORDER', order)
			})
		},
		setProducts({ commit }){
			return api.getAllProducts().then((response) => {
				commit('SET_PRODUCTS', response.data)
			})
		},
		setUsers({ commit }){
			return api.getAllUsers().then((response) => {
				commit('SET_USERS', response.data)
			})
		},
		setClients({ commit }){
			return api.getAllClients().then((response) => {
				commit('SET_CLIENTS', response.data)
			})
		},
		setOrders({ commit }){
			return api.getAllOrders().then(response => {
				commit('SET_ORDERS', response.data)
			})
		},
		setCurrentUser({ commit }, user){
			commit('SET_CURRENT_USER', user)
		},
		logout({ commit }){
			commit('SET_CURRENT_USER', null)
		}
	},
	getters: {
		currentUser(state){
			return state.currentUser
		},
		users(state){
			return state.users
		},
		clients(state){
			return state.clients
		},
		orders(state){
			return state.orders
		},
		products(state){
			return state.products
		}
	},
	modules: {}
});
