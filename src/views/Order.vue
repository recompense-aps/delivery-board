<template lang="pug">
    div( class="uk-grid-small uk-grid")

        div( class="uk-margin uk-width-1-2@s")
            h2 {{ client.name }}

        div( class="uk-margin uk-width-1-2@s")
            span( 
                class="uk-label"
                v-if='!delivered'
            ) Ordered

            span(
                class="uk-label uk-label-success"
                v-if='delivered'
            ) Delivered

        div( class="uk-margin uk-width-1-1")
            h3
                span( uk-icon="location") 
                span {{ destination }}

        div( class="uk-margin uk-width-1-2@s")
            h3
                span( uk-icon="calendar") 
                span {{ expectedDateOfDelivery }}

        div( class="uk-margin uk-width-1-2@s")
            h3
                span( uk-icon="clock") 
                span {{ expectedTimeOfDelivery }}

        div( class="uk-margin uk-width-1-1")
            ProductTable( :products='resolveProducts()')

        div( class="uk-margin")
            button( 
                class="uk-button uk-button-default"
                @click='completeOrder'
            )
                span( uk-icon="check")
                span Delivered

</template>

<script>
import ProductTable from '@/components/ProductTable.vue'

export default {
    components:{ ProductTable },

    created(){
        if(!this.$store.getters.currentUser.id){
            this.$router.push({name: 'Login'})
        }
        else{
            this.user = this.$store.getters.currentUser
        }
    },
    
    data(){
        return {
            ...this.resolveOrder()
        }
    },

    methods:{
        resolveOrder() {
            return this.$store.getters.orders.filter(order => order.id === this.$route.params.id).pop()
        },
        resolveProducts() {
            const products = []
            this.products.forEach(product => {
                const transformed = this.$store.getters.products.filter(theProduct => theProduct.id === product.id).pop()
                products.push(Object.assign({ quantity:product.quantity }, transformed))
            })
            return products
        },
        completeOrder() {

        }
    },

    computed:{
        client(){
            return this.$store.getters.clients.filter(client => client.id === this.clientId).pop()
        }
    }
}
</script>