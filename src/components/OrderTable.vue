<template lang="pug">
    table( class="uk-table uk-table-striped")
        thead
            tr
                th Client
                th Destination
                th 
        tbody
            tr(
                v-for='order in orders'
                :key='order.id'
            )
                td {{ resolveClient(order.clientId).name }}
                td {{ order.destination }}
                td
                    button(
                        class="uk-button uk-button-default"
                        @click='openOrder(order)'
                    ) Open

        p( v-if='orders.length')
</template>

<script>
export default {
    props: {
        orders: Array
    },
    methods: {
        openOrder(order){
            this.$router.push({ name:"Order", params:{id:order.id} })
        },
        resolveClient(id){
            return this.$store.getters.clients.filter(client => client.id === id).pop()
        }
    }
}
</script>

<style lang="scss" scoped>
    $mainColor: #582A72;

    thead{
        background-color: $mainColor;

        tr{
            th{
                color: white !important;
            }
        }
    }
</style>