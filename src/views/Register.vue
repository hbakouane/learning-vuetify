<template>
  <v-layout row wrap justify-center class="mt-10">
    <v-flex xs8 md6 xl4>
        <v-card flat>
            <v-card-title>Register</v-card-title>
            <v-progress-linear v-if="loading" :indeterminate="loading" color="grey"></v-progress-linear>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-text-field v-model="name" class="mb-4" label="Name" hide-details="auto" :rules="rules.name"></v-text-field>
                    <v-text-field v-model="email" class="mb-4" label="Email" hide-details="auto" :rules="rules.email"></v-text-field>
                    <v-text-field type="password" v-model="password" label="Password" :rules="rules.password"></v-text-field>
                    <v-text-field type="password" v-model="password_confirmation" label="Confirm Password" :rules="rules.password_confirmation"></v-text-field>
                    <router-link class="d-block text-decoration-none my-1" :to="{ name: 'Login' }">Already have an account?</router-link>
                    <v-btn color="grey" outlined @click="validate">Register</v-btn>
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
            rules: {
                name: [
                    value => !!value || 'Required',
                    value => (value.length >= 4) || 'Please enter a valid name.'
                ],
                email : [
                    value => !!value || 'Required.',
                    value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail.'
                    }
                ],
                password : [value => !!value || 'Required.'],
                password_confirmation : [
                    value => !!value || 'Required.',
                    value => this.password == value || 'Password Confirmation must match the password'
                ]
            },
            valid: false,
            loading: false,
            name: null,
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