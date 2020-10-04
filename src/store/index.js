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
		}

	},
	actions: {
		addOrder({ commit }, order) {
			return api.addOrder(order).then(() => {
				commit('ADD_ORDER', order)
			})
		},
		setProducts({ commit }){
			return api.getAllProducts().then((products) => {
				commit('SET_PRODUCTS', products)
			})
		}
	},
	modules: {}
});
