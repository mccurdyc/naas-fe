import Vuetify from 'vuetify'

Vue.use(Vuetify)

<template>
  <v-app>
  <v-content>
    <v-container grid-list-md>
        <v-layout align-center justify-center>
          <v-flex md12>
            <v-btn color="#f2777a" light>
              <span style="white-space: pre-line;">
                <font-awesome-icon class="fa-3x" :icon="['fas', 'file-code']"/>
                Add
                CODEOWNERs
              </span>
            </v-btn>
            <v-btn color="#99cc99" light>
              <span style="white-space: pre-line;">
                <font-awesome-icon class="fa-3x" :icon="['fas', 'file-contract']"/>
                Add
                LICENSE
              </span>
            </v-btn>
            <v-btn color="#ffcc66" light>
              <span style="white-space: pre-line;">
                <font-awesome-icon class="fa-3x" :icon="['fas', 'list']"/>
                List
                Dependencies
              </span>
            </v-btn>
            <v-btn color="#6699cc" light>
              <span style="white-space: pre-line;">
                <font-awesome-icon class="fa-3x" :icon="['fas', 'search']"/>
                Find and
                Replace Text
              </span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
font-awesome-icon {
  font-size: 50px;
}

.container {
  margin: 100px;
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
