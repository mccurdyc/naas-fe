import Vuetify from 'vuetify'

Vue.use(Vuetify)

<template>
  <v-app>
    <v-content>
      <v-layout justify-center>
        <v-flex xs12 sm6>
          <v-card>
            <v-container fluid grid-list-md >
              <v-layout row wrap>
                <v-flex
                  v-for="action in actions"
                  :key="action.title"
                  v-bind="{ [`sm${action.flex}`]: true }"
                >
                  <v-card>
                    <v-container grid-list-md>
                      <v-layout row wrap>
                        <v-flex pa-3 ma-1>
                          <font-awesome-icon class="fa-10x" :icon="[`${action.icon_group}`, `${action.icon}`]"/>
                        </v-flex>

                        <v-flex>
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
          </v-card>
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
        { title: 'Add CODEOWNERs File', icon_group: 'fas', icon: 'file', flex: 6, description: 'Add a CODEOWNERs file to the root of your repositories.'},
      ]
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
font-awesome-icon {
  font-size: 50px;
}

.container {
  margin: 100px;
}

.font-awesome-icon{
  margin: 50px;
}
button {
  text-align: center;
  text-transform: capitalize;
  display: inline-block;
  font-size: 30px;
  padding: 50px 100px 250px 100px;
  border-radius: 5px;
}
</style>
