import Vuetify from 'vuetify'

Vue.use(Vuetify)

<template>
  <v-app>
    <v-content>
      <v-layout mt-5>
        <v-flex md12 offset-md2>
          <v-container fluid fill-height grid-list-md>
            <v-layout row wrap>
              <v-flex
                v-for="action in actions"
                :key="action.title"
                v-bind="{ [`md${action.flex}`]: true }"
              >
                <v-card>
                  <v-container fluid grid-list-md>
                    <v-layout align-center column>
                      <v-flex ma-3>
                        <font-awesome-icon class="fa-10x" :icon="[`${action.icon_group}`, `${action.icon}`]"/>
                      </v-flex>

                      <v-flex ma-3>
                        <v-card-title>
                          <div>
                            <h2>{{ action.title }}</h2>
                            <div>{{ action.description }}</div>
                          </div>
                        </v-card-title>
                      </v-flex>
                    </v-layout>
                  </v-container>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <font-awesome-icon class="fa-1x" :icon="['fas', 'arrow-right']"/>
                    </v-btn>
                  </v-card-actions>

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
        { title: 'Add CODEOWNERs File', icon_group: 'fas', icon: 'file', flex: 5, description: 'Add a CODEOWNERs file to the root of your repositories.'},
        { title: 'Add CODEOWNERs File', icon_group: 'fas', icon: 'file', flex: 5, description: 'Add a CODEOWNERs file to the root of your repositories.'},
        { title: 'Add CODEOWNERs File', icon_group: 'fas', icon: 'file', flex: 5, description: 'Add a CODEOWNERs file to the root of your repositories.'},
        { title: 'Add CODEOWNERs File', icon_group: 'fas', icon: 'file', flex: 5, description: 'Add a CODEOWNERs file to the root of your repositories.'},
      ]
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
