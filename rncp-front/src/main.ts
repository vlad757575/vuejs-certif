import process from 'process';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/main.css'


const public_api_url = (process as any).env.API_URL;
const app = createApp(App)

app.use(router)

app.mount('#app')
