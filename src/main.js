/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({once: true});

import '@/styles/main.css'
const app = createApp(App)
registerPlugins(app)

app.mount('#app')
