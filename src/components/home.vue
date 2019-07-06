import Vuetify from 'vuetify'

Vue.use(Vuetify)

<template>
  <v-app>
    <v-content>
      <v-layout>
        <v-flex md12 offset-md2>
          <v-container fluid fill-height grid-list-md>
            <v-layout row wrap>
              <v-flex
                v-for="action in actions"
                :key="action.title"
                v-bind="{ [`md${action.flex}`]: true }"
                d-flex
              >

                <v-card :color="`${action.color}`" light>
                  <v-container grid-list-md class="container-header">
                    <v-layout column>
                      <v-layout align-center column ma-2>
                        <font-awesome-icon class="fa-8x" :icon="[`${action.icon_group}`, `${action.icon}`]"/>
                      </v-layout>

                      <v-layout align-center column ma-2>
                        <div>
                          <h2>{{ action.title }}</h2>
                        </div>
                      </v-layout>
                    </v-layout>
                  </v-container>

                  <v-container grid-list-md class="container-body">
                      <v-card-text class="container-body">
                        <div>
                          {{ action.description }}
                        </div>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn>
                          Run
                        </v-btn>
                      </v-card-actions>
                  </v-container>
                </v-card>

              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({
      actions: [
        { title: 'Add CODEOWNERs File', color: 'yellow', icon_group: 'fas', icon: 'file', flex: 5, description: 'Add a CODEOWNERs file -- with content specified by input to Neighbor -- to the root of your repositories.'},
        { title: 'Add LICENSE File', color: 'red', icon_group: 'fas', icon: 'file-contract', flex: 5, description: 'Add one of supported licenses (e.g., MIT, GNU General Public License [v2.0, v3.0], Apache license 2.0) to the root of your repositories as a LICENSE.[txt, md] file.'},
        { title: 'List Dependencies', color: 'blue', icon_group: 'fas', icon: 'list', flex: 5, description: 'List your project\'s dependencies using one of the supported tools for repository\'s language (e.g., `go list -m all` for Go.).'},
        { title: 'Find and Replace Text', color: 'teal', icon_group: 'fas', icon: 'search', flex: 5, description: 'Given two strings as input, find all instances of the first string in the repository and replace with the second string.'},
      ]
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-card {
  position: relative;
}

.v-card__actions {
  position: absolute;
  bottom: 0px;
  right:0px;
}

.container-header {
  height: 50%;
}

.container-body {
  height: 50%;
}
</style>
