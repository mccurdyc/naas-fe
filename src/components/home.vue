import Vuetify from 'vuetify'

Vue.use(Vuetify)

<template>
  <v-app>
    <v-container ma-5 fill-height fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex offset-md2 md8>
            <v-btn color="#f2777a" dark>
              <font-awesome-icon class="fa-fw" :icon="['fas', 'file-code']"/> Add CODEOWNERs
            </v-btn>
          </v-flex>

          <v-flex d-flex offset-md2 md8>
            <v-btn color="#99cc99" dark>
              <font-awesome-icon class="fa-fw" :icon="['fas', 'file-contract']"/> Add LICENSE
            </v-btn>
          </v-flex>

          <v-flex d-flex offset-md2 md8>
            <v-btn color="#ffcc66" dark>
              <font-awesome-icon class="fa-fw" :icon="['fas', 'list']"/> List Dependencies
            </v-btn>
          </v-flex>

          <v-flex d-flex offset-md2 md8>
            <v-btn color="#6699cc" dark>
              <font-awesome-icon class="fa-fw" :icon="['fas', 'search']"/> Find and Replace Text
            </v-btn>
          </v-flex>

        </v-layout>
      </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'home',
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
button {
  padding: 1% 0 6% 0;
  border: none;
  color: white;
  text-align: center;
  text-transform: capitalize;
  text-decoration: none;
  display: inline-block;
  font-size: 40px;
  margin: 40px 0px 0px 0px;
  border-radius: 4px;
}
</style>
