<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-titlecase">
        <span>NaaS:</span>
        <span class="font-weight-light"> Neighbor as a Service</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn md>
        <font-awesome-icon class="fa-fw" :icon="['fab', 'github']"/>
        Sign In With GitHub
      </v-btn>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>

  <v-footer
      dark
      height="auto"
      color="primary"
    >
      <v-container fluid grid-list-md>
        <v-card
          flat
          tile
          color="primary"
          class="white--text text-md-center"
        >
            <v-layout row justify-center>
              <v-flex md2>
                <v-card-title class="yellow--text title justify-center font-weight-bold">
                  Information
                </v-card-title>
                <v-card height=75% dark color=primary flat>
                  <v-card-text>
                    <v-btn flat md>
                      Pricing
                    </v-btn>
                  </v-card-text>
                  <v-card-text>
                    <v-btn flat md>
                      Roadmap
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex md2>
                <v-card-title class="yellow--text title justify-center font-weight-bold">
                  Contact Us
                </v-card-title>
                <v-card height=75% dark color=primary flat>
                  <v-card-text>
                    <v-btn flat md>
                      Twitter
                    </v-btn>
                  </v-card-text>
                  <v-card-text>
                    <v-btn flat md>
                      GitHub
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex md2>
                <v-card-title class="yellow--text title justify-center font-weight-bold">
                  Legal
                </v-card-title>
                <v-card height=75% dark color=primary flat>
                  <v-card-text>
                    <v-btn flat md>
                      Terms of Service
                    </v-btn>
                  </v-card-text>
                  <v-card-text>
                    <v-btn flat md>
                      Privacy Policy
                    </v-btn>
                  </v-card-text>
                  <v-card-text>
                    <v-btn flat md>
                      Subprocessors
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>

          <v-card-text class="white--text">
            &copy;2019 — <strong>Neighbor</strong>
          </v-card-text>
        </v-card>
      </v-container>
    </v-footer>
  </v-app>

</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  color: white;
  text-align: center;
  text-transform: capitalize;
  text-decoration: none;
  display: inline-block;
  margin: -10px;
  border-radius: 4px;
}
</style>
