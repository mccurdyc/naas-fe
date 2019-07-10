<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-titlecase">
        <router-link class="header" to="/">
          <span>NaaS:</span>
          <span class="font-weight-light"> Neighbor as a Service</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-bind:href="link.url">
        <font-awesome-icon class="fa-fw" :icon="['fab', 'github']"/>
        Sign In With GitHub
      </v-btn>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>

    <v-footer light height="auto" color=white>
        <v-container fluid grid-list-md>
          <v-card flat tile color=white class="white--text text-md-center" >
              <v-layout row justify-center>
                <v-flex md2>
                  <v-card-title class="yellow--text title justify-center font-weight-bold">
                    Information
                  </v-card-title>
                  <v-card height=75% light color=white flat>
                    <div class="link">
                      <router-link to="/pricing">
                        Pricing
                      </router-link>
                    </div>
                    <div class="link">
                      <router-link to="/roadmap">
                        Roadmap
                      </router-link>
                    </div>
                  </v-card>
                </v-flex>

                <v-flex md2>
                  <v-card-title class="yellow--text title justify-center font-weight-bold">
                    Contact Us
                  </v-card-title>
                  <v-card height=75% dark color=white flat>
                    <div class="link">
                      <a href="https://twitter.com/mccurdycolton" target="_blank">
                        Twitter
                      </a>
                    </div>
                    <div class="link">
                      <a href="https://github.com/mccurdyc/naas/issues/new" target="_blank">
                        GitHub
                      </a>
                      </div>
                  </v-card>
                </v-flex>

                <v-flex md2>
                  <v-card-title class="yellow--text title justify-center font-weight-bold">
                    Legal
                  </v-card-title>
                  <v-card dark color=white flat>
                    <div class="link">
                      <router-link to="/terms">
                        Terms of Service
                      </router-link>
                    </div>
                    <div class="link">
                      <router-link to="/privacy-policy">
                        Privacy Policy
                      </router-link>
                    </div>
                    <div class="link">
                      <router-link to="/subprocessors">
                        Subprocessors
                      </router-link>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>

            <v-card-text>
              <strong>&copy;2019 — Neighbor</strong>
            </v-card-text>
          </v-card>
        </v-container>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  app_icon: 'arrow-right',
  data: () => ({
    link: {
      url:`https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}`
    }
  })
}
</script>

<style scoped>
.header {
  color: white;
  text-decoration: none;
  text-transform: capitalize;
}
strong, a {
  color: #2d2d2d;
  text-decoration: none;
  text-transform: capitalize;
}
</style>
