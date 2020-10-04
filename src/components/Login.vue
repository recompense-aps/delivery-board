<template lang="pug">
    form( @onsubmit.prevent='')
        label Client
        select( class="uk-select")
            option(
                v-for='client in clients'
                v-model='selectedClient'
                :key='client.id'
            )
        
        label Destination
        input(
            class="uk-input"
            v-model='destination'
        )

        label Expected Date of Delivery
        input(
            class="uk-input"
            v-model='expectedDateOfDelivery'
        )

        label Expected Delivery Time
        input(
            class="uk-input"
            v-model='expectedTimeOfDelivery'
        )

        select
            option(
                v-for='driver in drivers'
                v-model='selectedDriver'
                :key='driver.id'
            )

</template>
