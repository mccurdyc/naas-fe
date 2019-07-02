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
                <v-card dark color>
                  <v-card-text>Pricing</v-card-text>
                  <v-card-text>Roadmap</v-card-text>
                </v-card>
              </v-flex>

              <v-flex md2>
                <v-card-title class="yellow--text title justify-center font-weight-bold">
                  Contact Us
                </v-card-title>
                <v-card dark color>
                  <v-card-text>Twitter</v-card-text>
                  <v-card-text>GitHub</v-card-text>
                </v-card>
              </v-flex>

              <v-flex md2>
                <v-card-title class="yellow--text title justify-center font-weight-bold">
                  Legal
                </v-card-title>
                <v-card dark color=primary.darken>
                  <v-card-text>Terms of Service</v-card-text>
                  <v-card-text>Privacy Policy</v-card-text>
                  <v-card-text>Subprocessors</v-card-text>
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
