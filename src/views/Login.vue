<template>
  <v-layout row wrap justify-center class="mt-10">
    <v-flex xs8 md6 xl4>
        <v-card flat>
            <v-card-title>Login</v-card-title>
            <v-progress-linear v-if="loading" :indeterminate="loading" color="grey"></v-progress-linear>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-text-field v-model="email" class="mb-4" label="Email" hide-details="auto" :rules="emailRules"></v-text-field>
                    <v-text-field v-model="password" label="Password" :rules="passwordRules"></v-text-field>
                    <v-switch color="grey" label="Remember me" v-model="rememberMe"></v-switch>
                    <router-link class="d-block text-decoration-none my-1" :to="{ name: 'Register' }">Don't have an account?</router-link>
                    <v-btn color="grey" outlined @click="validate">Login</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data() {
        return {
            emailRules: [
                value => !!value || 'Required.',
                value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                }
            ],
            passwordRules: [
                value => !!value || 'Required.'
            ],
            rememberMe: false,
            valid: false,
            loading: false,
            email: null,
            password: null
        }
    },
    methods: {
        validate: function () {
            this.$refs.form.validate()
            if (this.valid) {
                this.loading = true
            } else {
                this.loading = false
            }
        }
    }
}
</script>

<style>

</style>