<template lang="pug">
    div
        h1 Create a new order
        form(
            uk-grid
            class="uk-form-stacked"
            @submit.prevent=''
        )
            div( class="uk-margin")
                label Client
                select( 
                    class="uk-select"
                    v-model='selectedClient'
                )
                    option(
                        v-for='client in clients'
                        :key='client.id'
                    )

            div( class="uk-margin")
                label Destination
                input(
                    class="uk-input"
                    v-model='destination'
                )

            div( class="uk-margin")
                label Expected Date of Delivery
                input(
                    type="date"
                    class="uk-input"
                    v-model='expectedDateOfDelivery'
                )

            div( class="uk-margin")
                label Expected Delivery Time
                input(
                    type="time"
                    class="uk-input"
                    v-model='expectedTimeOfDelivery'
                )

            div( class="uk-margin")
                label Cargo
                select(
                    class="uk-select uk-width-1-2@"
                    v-model='selectedProduct'
                )
                button(
                    class="uk-button uk-button-default"
                ) Add

            div( class="uk-margin")
                label Driver
                select(
                    class="uk-select"
                    v-model='selectedDriver'
                )
                    option(
                        v-for='driver in drivers'
                        :key='driver.id'
                    )

            div( class="uk-margin")
                input(
                    class="uk-button uk-button-default"
                    type="submit"
                )

</template>

<script>
import { mapState } from 'vuex'

export default { 
    data() {
        return {
            destination: "",
            selectedClient: "",
            selectedDriver: "",
            selectedProduct: "",
            expectedDateOfDelivery: "",
            expectedTimeOfDelivery: ""
        }
    },
    methods: {
        createOrder() {
            this.$store
                .dispatch('addOrder')
                .then(() => {
                    alert('Order created!')
                })
                .catch(() => {
                    alert('ther was an error')
                })
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
