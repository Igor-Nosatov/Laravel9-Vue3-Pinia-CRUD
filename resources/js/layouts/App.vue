<template>
  <v-app>
    <div id="app">
      <v-app-bar>
        <img alt="Vue logo" src="https://vuejs.org/images/logo.png" />
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'new' }" class="text-sm font-medium"
              >Create company</router-link
            >
          </li>
        </ul>
      </v-app-bar>

      <main>
        <router-view />
      </main>
      <v-footer>
        <v-card
          elevation="0"
          rounded="0"
          width="100%"
          class="bg-grey text-center"
        >
          <v-divider></v-divider>

          <v-card-text class="text-white">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
