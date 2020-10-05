<template lang="pug">

div
	nav( class="uk-navbar-container" uk-navbar id="nav")
		div( class="uk-navbar-left")
			ul( class="uk-navbar-nav")
				li
					router-link( to="/") Home
				li
					router-link( 
						to="/create"
						v-if='isSales'
					) Create
				li( v-if='loggedIn')
					a(
						@click.prevent='logout'
					) Logout

	div( 
		class="uk-container"
		style="padding-bottom:10%; padding-top:10%"
	)
		router-view

	footer
		a(href="https://github.com/recompense-aps/")
			span( style="color:white" uk-icon="github")
			span( style="color:white; margin-left:0.5%") Alex Smith
</template>

<script>
export default{
	computed: {
		isSales() {
			return this.$store.getters.currentUser &&
				   this.$store.getters.currentUser.type === 'sales'
		},
		loggedIn(){
			return this.$store.getters.currentUser
		}
	},

	methods: {
		logout(){
			this.$router.push({name:'Login'})
			this.$store.dispatch('logout')
		}
	}
}
</script>

<style lang="scss">
$mainColor: #582A72;

html,footer{
	background-color: $mainColor;
}

footer{
	background-color: $mainColor;
	color:white;
	padding-top:10%;
	font-weight:bold;
	text-align: center;
}

body{
	background-color: white;
}


input,select, .uk-button-default{
	border-color: $mainColor !important;
	color: $mainColor
}

.uk-button-default:hover{
	background-color: $mainColor;
	color: white;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

#nav {
	background-color: $mainColor;
	a {
		color:white !important

		// &.router-link-exact-active {
		// 	font-weight: bold;
		// }
	}

	a:hover{
		font-weight: bold;
	}
}
</style>
