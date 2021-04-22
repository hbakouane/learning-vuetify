<template>
  <div>
    <v-container>
      <v-breadcrumbs large :items="breadcrumbs">
        <template>
          <v-breadcrumbs-item>
            <router-link class="grey--text text-decoration-none" :to="{ name: 'Home' }">Home</router-link>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item>
            <router-link class="grey--text text-decoration-none" :to="{ name: 'Team' }">Team</router-link>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>

      <v-layout row wrap justify-center>
        <v-flex xs11 md3 xl3 v-for="(person, index) in team" :key="index">
          <v-card class="ma-2 pb-5" flat style="border: 1px solid	#E8E8E8">
            <v-responsive>
              <v-img style="height: 400px" :lazy-src="person.img" :src="person.img">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-responsive>
            <v-card-text class="pb-0">
              <h2 class="text--grey lighten-1 text-center">{{ person.name }}</h2>
              <p class="text--grey lighten-1 text-center">{{ person.role }}</p>
            </v-card-text>
            <v-card-actions class="d-flex justify-center" style="border-top: 1px solid #E8E8E8; padding-top: 25px;">
              <v-btn class="mx-2" outlined color="grey">
                <v-icon>mdi-message</v-icon>
              </v-btn>
              <v-btn class="mx-2" outlined color="grey">
                <v-icon>mdi-phone</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Team',
  data() {
    return {
      team: [
        { name: 'Mohammed', img: 'https://previews.123rf.com/images/dolgachov/dolgachov1603/dolgachov160306114/54057828-business-people-and-portrait-concept-smiling-businessman-face-or-portrait.jpg', role: 'Web Developer' },
        { name: 'John Doe', img: 'https://www.microsoft.com/en-us/research/uploads/prod/2018/08/Omar-Abou-El-khir.jpg', role: 'UI/UX' },
        { name: 'Tarek Said', img: 'https://s3.amazonaws.com/pixpa.com/com/articles/1525891879-379720-warren-wong-242286-unsplashjpg.png', role: 'Mern Stack expert' },
        { name: 'Jessica', img: 'https://www.joancanto.com/wp-content/uploads/2017/04/H10B1582-Edit.jpg', role: 'Blogger' }
      ],
      breadcrumbs: [
        { text: 'Dashboard', href: '/' },
        { text: 'Team', href: '/team' }
      ]
    }
  }
}
</script>
