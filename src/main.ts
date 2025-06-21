import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

import { createHead } from '@vueuse/head'; 

const app = createApp(App);
const head = createHead(); 

app.use(router);
app.use(TDesign);
app.use(head);

app.mount('#app');
