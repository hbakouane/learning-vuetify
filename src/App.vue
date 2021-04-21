<template>
  <v-app>
    <Navbar></Navbar>
    <v-main class="grey lighten-4">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/global/Navbar.vue';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
