import './bootstrap';

import {createApp} from 'vue'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import App from './layouts/App.vue'

import router from './router'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})


const pinia = createPinia()
const vue = createApp(App);

vue.use(createPinia());
vue.use(router());
vue.use(vuetify);
vue.mount('#app');
