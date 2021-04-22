<template>
  <v-container>
    <v-breadcrumbs :items="items" class="pl-0">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href">{{ item.text }}</v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-layout row wrap justify-center>
      <v-flex xs11 md10 xl8 class="mb-3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn outlined v-on="on" color="grey" class="mr-2">
              <div @click="sortBy('todo')"><v-icon>mdi-folder</v-icon> By ToDo</div>
              <div @click="sortTodo = false">
                <v-chip close small class="red lighten-1" v-if="sortTodo" @click="unset">Remove</v-chip>
              </div>
            </v-btn>
          </template>
          <span>Sort project by ToDo name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn outlined v-on="on" color="grey" class="mr-2">
              <div @click="sortBy('project')"><v-icon>mdi-account</v-icon> By project</div>
              <div @click="sortProject = false">
                <v-chip close small class="red lighten-1" v-if="sortProject" @click="unset">Remove</v-chip>
              </div>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-text-field label="Search" class="mt-3" v-model="search"></v-text-field>
        <p class="grey--text text-right">{{ results }} results</p>
      </v-flex>
      <v-flex xs11 md10 xl8>
        <v-card>
          <draggable v-model="projects" group="projects" @start="drag=true" @end="drag=true">
            <transition-group>
              <v-card-text
                :class="[{
                  'border-ongoing': project.status == 'ongoing' ,
                  'border-success': project.status == 'complete' ,
                  'border-danger': project.status == 'overdue' ,
                }, 'rounded', 'px-7', 'draggable']"
                v-for="(project, i) in projects"
                :key="i"
              >
                <v-layout row wrap class="py-5">
                  <v-flex xs12 md3 xl3>
                    <p class="mb-0 grey--text">Todo</p>
                    <h3>{{ project.todo }}</h3>
                  </v-flex>
                  <v-flex xs4 md2 xl2>
                    <p class="mb-0 grey--text">Project</p>
                    <h3>{{ project.project }}</h3>
                  </v-flex>
                  <v-flex xs4 md1 xl1>
                    <p class="mb-0 grey--text">Due</p>  
                    <h3>{{ project.due }}</h3>
                  </v-flex>
                  <v-flex xs4 md2 xl2>
                    <p class="mb-0 text-center v-picker--full-width grey--text">Status</p>
                    <div class="d-flex justify-center">
                      <v-chip text-color="white" :class="`project ${project.status}`">{{ project.status }}</v-chip>
                    </div>
                  </v-flex>
                  <v-flex xs6 md1 xl1>
                    <p class="mb-0 grey--text">Created at</p>
                    <h3>{{ project.created_at }}</h3>
                  </v-flex>
                  <v-flex xs6 md3 xl3>
                    <p class="mb-0 caption grey--text mb-5">Actions</p>
                    <v-layout row wrap justify-space-around>
                      <v-flex xs12 md5 xl5>
                        <v-btn block color="yellow darken-4" outlined>Edit</v-btn>
                      </v-flex>
                      <v-flex xs12 md5 xl5>
                        <v-btn block color="red darken-4" outlined>Delete</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </transition-group>
          </draggable>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Home',
  components: {
    draggable
  },
  data() {
    return {
      items: [ { text: 'Dashboard', 'href': '/' } ],
      search: '',
      headers: [
        { text: 'ToDo', align: 'start', value: 'todo' },
        { text: 'Project', value: 'project' },
        { text: 'Due', value: 'due' },
        { text: 'Status', value: 'status' },
        { text: 'Created at', value: 'created_at' },
        { text: 'Actions', value: 'actions' }
      ],
      projects: [],
      sortTodo: false,
      sortProject: false,
      search: null,
      results: null
    }
  },
  beforeMount: async function() {
      await fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.$store.state.projects = data)
      .catch(err => console.log(err))
      this.projects = this.$store.state.projects
  },
  methods: {
    sortTodos: function () {
      this.sortTodo = true
    },
    sortProjects: function () {
      this.sortProject = true
    },
    sortBy: function (prop) {
      prop == "project" ? this.sortProject = true : ''
      prop == "todo" ? this.sortTodo = true : ''
      this.projects.sort((a, b) => a[prop] > b[prop] ? -1 : 1)
    },
    unset: async function () {
      this.projects = await fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err))
    }
  },
  watch: {
    search: function () {
      this.projects = this.projects.filter(project => {
        return project.todo.toLowerCase().includes(this.search.toLowerCase()) || project.project.toLowerCase().includes(this.search.toLowerCase())
      })
      if (this.search == '') {
        this.unset()
      }
    },
    projects: function () {
      return this.results = this.projects.length
    }
  }
}
</script>

<style>
  .v-chip.project.ongoing {
    background: #303F9F !important;
  }
  .v-chip.project.complete {
    background: #00695C !important;
  }
  .v-chip.project.overdue {
    background: #B71C1C !important;
  }
  .border-success {
    border: 1px solid rgba(128, 128, 128, 0.315);
    border-left: 7px solid #00695C;
  }
  .border-ongoing {
    border: 1px solid rgba(128, 128, 128, 0.315);
    border-left: 7px solid #303F9F;
  }
  .border-danger {
    border: 1px solid rgba(128, 128, 128, 0.315);
    border-left: 7px solid #B71C1C;
  }
  .draggable {
    cursor: all-scroll;
  }
</style>
