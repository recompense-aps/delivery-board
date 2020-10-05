<template lang="pug">
    table( class="uk-table uk-table-striped")
        thead
            tr
                th Product
                th Quantity
        tbody
            tr(
                v-for='product in resolvedProducts'
            )
                td {{ product.name }}
                td {{ product.quantity }}
</template>

<script>
export default {
    props: {
        products: Array
    },

    computed: {
        resolvedProducts() {
            const products = []
            this.products.forEach(product => {
                products.push({
                    quantity:product.quantity,
                    ...this.$store.getters.products.filter(theProduct => theProduct.id === product.id).pop()
                })
            })
            return products
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