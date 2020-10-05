<template lang="pug">
    div( style="")
        h1 Login
        form( 
            class="uk-form-stacked"
            @submit.prevent='login'
        )
            div( class="uk-margin")
                label Username
                input(
                    class="uk-input"
                    v-model='userName'
                )

            div( class="uk-margin")
                input(
                    type="submit"
                    class="uk-button uk-button-default"
                ) 
</template>

<script>

export default {
    data() {
        return {
            userName:''
        }
    },
    methods: {
        login() {
            const validUser = this.$store.getters.users.filter(({userName}) => userName === this.userName)?.pop()
            console.log(validUser)
            if(validUser) {
                this.$store.dispatch('setCurrentUser', validUser)
                this.$router.push({name: 'Dashboard'})
            }
            else {
                alert('Invalid user name')
            }
        }
    }
}
</script>