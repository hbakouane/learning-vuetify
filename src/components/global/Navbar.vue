<template>
  <div>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="display-1 text-uppercase grey--text">
                <span>ToDo</span> 
                <span class="font-weight-bold">App</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn outlined large color="grey" @click="logout">
                Sign Out
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>
    </nav>
    <v-navigation-drawer hide-overlay temporary app v-model="drawer" color="grey lighten-4">
      <v-layout column wrap align-center class="mb-1 mt-15">
        <v-flex md12 class="mb-4">
          <v-avatar size="150">
            <img src="https://picsum.photos/id/11/500/300" class="grey lighten-3">
          </v-avatar>
          <v-badge 
            left
            bordered
            color="success"
            overlap
          ></v-badge>
        </v-flex>
        <v-flex md12>
          <router-link 
            to="/profile" 
            class="blue-grey--text darken-4 text-decoration-none"
            >
            Haytam Bakouane
          </router-link>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item-group>
          <v-list-item active-class="grey darken-3" class="grey--text" v-for="(link, i) in links" :key="i" router :to="link.route" exact>
            <v-list-item-icon>
              <v-icon class="grey--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <v-btn large block color="grey darken-3" class="rounded-0 white--text" @click="logout">
            Sign Out
            <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
          drawer: false,
          links: [
            { icon: 'mdi-view-dashboard', 'text': 'Dashboard', route: { name: 'Home' } },
            { icon: 'mdi-folder-clock', 'text': 'Projects', route: { name: 'Projects' } },
            { icon: 'mdi-account-supervisor', 'text': 'Team', route: { name: 'Team' } },
          ]
        }
    },
    methods: {
      logout: function() {
        this.$router.push({ name: 'Login' })
      }
    }
}
</script>
