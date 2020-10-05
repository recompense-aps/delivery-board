<template lang="pug">
    div
        h1 Your Orders
        h2 Hello, {{ user.firstName + ' ' + user.lastName }}
            span( style="float:right")
                span( 
                    v-if='isSales'
                    class="uk-label"
                ) Sales

                span( 
                    v-if='isDriver'
                    class="uk-label"
                ) Driver

        OrderTable( :orders='orders')
</template>

<script>
import OrderTable from '@/components/OrderTable.vue'
export default {
    components: {
        OrderTable
    },
    data(){
        return {
            user: {}
        }
    },
    created() {
        if(!this.$store.getters.currentUser){
            this.$router.push({name: 'Login'})
        }
        else{
            this.user = this.$store.getters.currentUser
        }
    },
    computed: {
        orders(){
            return this.$store.getters.orders.filter(order => this.user.id === order.driverId || this.user.id === order.salesId)
                    || []
        },
        isSales(){
            return this.$store.getters.currentUser.type === 'sales'
        },
        isDriver(){
            return this.$store.getters.currentUser.type === 'driver'
        }
    }
}
</script>