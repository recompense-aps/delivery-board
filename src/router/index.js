import Vue from "vue"
import VueRouter from "vue-router"
import Order from "../views/Order.vue"
import Dashboard from "../views/Dashboard.vue"
import Login from "../views/Login.vue"
import CreateOrder from "../views/CreateOrder.vue"

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/order/:id',
		name: 'Order',
		component: Order
	},
	{
		path: '/create',
		name: 'CreateOrder',
		component: CreateOrder
	}
	// {
	//   path: "/about",
	//   name: "About",
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () =>
	//     import(/* webpackChunkName: "about" */ "../views/About.vue")
	// }
];

const router = new VueRouter({
mode: "history",
base: process.env.BASE_URL,
routes
});

export default router;
