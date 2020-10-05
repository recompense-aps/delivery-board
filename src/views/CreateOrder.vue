<template lang="pug">
    div
        h1 Create a new order
        form(
            uk-grid
            class="uk-grid-small uk-grid"
            @submit.prevent='createOrder'
        )
            div( class="uk-width-1-1")
                label Client
                select( 
                    class="uk-select"
                    v-model='selectedClient'
                )
                    option(
                        v-for='client in clients'
                        :value='client.id'
                        :key='client.id'
                    ) {{ client.name }}

            div( class="uk-width-1-1")
                label Destination
                input(
                    class="uk-input"
                    v-model='destination'
                    :class=''
                )

            div( class="uk-width-1-1")
                label Expected Date of Delivery
                input(
                    type="date"
                    class="uk-input"
                    v-model='expectedDateOfDelivery'
                )

            div( class="uk-width-1-1")
                label Expected Delivery Time
                input(
                    type="time"
                    class="uk-input"
                    v-model='expectedTimeOfDelivery'
                )

            div( class="uk-width-1-1")
                label Cargo

            div( class="uk-width-1-2@s")
                select(
                    class="uk-select"
                    v-model='selectedProduct'
                )
                    option(
                        v-for='product in products'
                        :key='product.id'
                        :value='product.id'
                    ) {{ product.name }}
        
            div( class="uk-width-1-6@s")
                input(
                    type="number"
                    class="uk-input"
                    placeholder="count"
                    v-model.number='productQuantity'
                )

            div( class="uk-width-1-4@s")
                button(
                    class="uk-button uk-button-default"
                    @click.prevent='addProductToOrder'
                ) Add

            div(
                class="uk-width-1-1"
            )
                ProductTable(
                    v-show='productsInOrder.length'
                    :products='productsInOrder'
                )

            div( class="uk-width-1-1")
                label Driver
                select(
                    class="uk-select"
                    v-model='selectedDriver'
                )
                    option(
                        v-for='driver in drivers'
                        :key='driver.id'
                        :value='driver.id'
                    ) {{ driver.firstName + ' ' + driver.lastName }}

            div( class="uk-margin")
                input(
                    class="uk-button uk-button-default"
                    type="submit"
                )

</template>

<script>
import { mapState } from 'vuex'
import ProductTable from '@/components/ProductTable.vue'

export default {
    
    components:{
        ProductTable
    },
     
    data() {
        return {
            destination: "",
            selectedClient: 0,
            selectedDriver: 0,
            selectedProduct: 0,
            productQuantity: 0,
            expectedDateOfDelivery: "",
            expectedTimeOfDelivery: "",
            productsInOrder:        []
        }
    },
    methods: {
        createOrder() {
            const order = {
                clientId: this.selectedClient,
                driverId: this.selectedDriver,
                salesId: this.$store.getters.currentUser.id,
                destination: this.destination,
                expectedDateOfDelivery: this.expectedDateOfDelivery,
                expectedTimeOfDelivery: this.expectedTimeOfDelivery,
                products: this.productsInOrder
            }

            console.log(order)

            this.$store
                .dispatch('addOrder', order)
                .then(() => {
                    alert('Order created!')
                })
                .catch(() => {
                    alert('there was an error')
                })
        },
        addProductToOrder() {
            const id = this.selectedProduct
            const existing = this.productsInOrder.filter(product => product.id === id)?.pop()
            if(existing){
                existing.quantity += parseInt(this.productQuantity)
            }
            else{
                this.productsInOrder.push( { id:this.selectedProduct, quantity:this.productQuantity } )
            }
        },
        validateNotEmpty() {

        }
    },
    computed: {
        drivers(){
            return this.users.filter(user => user.type === 'driver')
        },
        ...mapState(['currentUser', 'clients', 'products', 'users'])
    }
};
</script>
